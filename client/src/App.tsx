import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { CitizenDashboard } from './components/CitizenDashboard';
import { ReportEmergencyScreen } from './components/ReportEmergencyScreen';
import { SosStatusScreen } from './components/SosStatusScreen';
import { LiveTrackingScreen } from './components/LiveTrackingScreen';
import { SheltersScreen } from './components/SheltersScreen';
import { AlertsScreen } from './components/AlertsScreen';

type ScreenState = 'login' | 'citizen_dashboard' | 'report_emergency' | 'sos_status' | 'live_tracking' | 'shelters' | 'alerts' | 'responder_dashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('citizen_dashboard');
  const [userRole, setUserRole] = useState<'citizen' | 'responder'>('citizen');
  const [currentReport, setCurrentReport] = useState<any>(null);

  const handleLoginSuccess = (role: 'citizen' | 'responder') => {
    setUserRole(role);
    if (role === 'citizen') {
      setCurrentScreen('citizen_dashboard');
    } else {
      alert('Responder Dashboard Coming Next!');
    }
  };

  const handleSwitchRole = (role: 'citizen' | 'responder') => {
    setUserRole(role);
    if (role === 'responder') {
      alert('Responder Dashboard Coming Next!');
    } else {
      setCurrentScreen('citizen_dashboard');
    }
  };

  const handleSosPress = () => {
    setCurrentScreen('report_emergency');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('citizen_dashboard');
  };

  const handleReportSubmit = (data: any) => {
    setCurrentReport({
      requestId: `#EX-${Math.floor(1000 + Math.random() * 9000)}`,
      location: data.location?.address || 'Ernakulam, Kochi',
      type: data.type || 'Medical Assistance',
      severity: data.severity || 'Critical',
      adults: data.peopleAffected?.adults || 2,
      children: data.peopleAffected?.children || 1,
      reportedTime: '09:41 AM, Aug 23'
    });
    setCurrentScreen('sos_status');
  };

  const handleTabNavigation = (tab: 'home' | 'sos' | 'track' | 'shelters' | 'alerts') => {
    if (tab === 'home') setCurrentScreen('citizen_dashboard');
    if (tab === 'sos') setCurrentScreen('report_emergency');
    if (tab === 'track') setCurrentScreen('live_tracking');
    if (tab === 'shelters') setCurrentScreen('shelters');
    if (tab === 'alerts') setCurrentScreen('alerts');
  };

  return (
    <div className="w-full min-h-screen">
      {currentScreen === 'login' && (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      )}

      {currentScreen === 'citizen_dashboard' && (
        <CitizenDashboard 
          onSwitchRole={handleSwitchRole} 
          onSosPress={handleSosPress}
          onNavigateShelters={() => setCurrentScreen('shelters')}
          onNavigateTrack={() => setCurrentScreen('live_tracking')}
          onNavigateAlerts={() => setCurrentScreen('alerts')}
        />
      )}

      {currentScreen === 'report_emergency' && (
        <ReportEmergencyScreen
          onBack={handleBackToDashboard}
          onSubmitSuccess={handleReportSubmit}
          onSwitchRole={handleSwitchRole}
        />
      )}

      {currentScreen === 'sos_status' && (
        <SosStatusScreen
          onBackToHome={handleBackToDashboard}
          onTrackLiveRescue={() => setCurrentScreen('live_tracking')}
          onSwitchRole={handleSwitchRole}
          reportData={currentReport}
        />
      )}

      {currentScreen === 'live_tracking' && (
        <LiveTrackingScreen
          onBack={() => setCurrentScreen('citizen_dashboard')}
          onSwitchRole={handleSwitchRole}
          requestId={currentReport?.requestId || '#EX-2847'}
        />
      )}

      {currentScreen === 'shelters' && (
        <SheltersScreen
          onBack={() => setCurrentScreen('citizen_dashboard')}
          onNavigateTab={handleTabNavigation}
          onSwitchRole={handleSwitchRole}
        />
      )}

      {currentScreen === 'alerts' && (
        <AlertsScreen
          onNavigateTab={handleTabNavigation}
          onSwitchRole={handleSwitchRole}
        />
      )}
    </div>
  );
}

export default App;
