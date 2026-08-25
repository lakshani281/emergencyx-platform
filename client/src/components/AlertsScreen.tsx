import React from 'react';
import { 
  Signal, 
  Wifi, 
  BatteryMedium, 
  User, 
  Truck 
} from 'lucide-react';

interface AlertsScreenProps {
  onNavigateTab: (tab: 'home' | 'sos' | 'track' | 'shelters' | 'alerts') => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
}

export const AlertsScreen: React.FC<AlertsScreenProps> = ({
  onNavigateTab,
  onSwitchRole
}) => {
  const alertsList = [
    {
      id: 1,
      icon: '🚨',
      title: 'New SOS 0.3 km from you',
      hasDot: true,
      description: 'Critical emergency near MG Road',
      time: '2 min ago',
      bgColor: '#fff1f2',
      borderColor: '#ffe4e6',
      titleColor: '#0f172a',
      badgeDotColor: '#ef4444'
    },
    {
      id: 2,
      icon: '⚠️',
      title: 'Flood Warning — Level 3',
      hasDot: true,
      description: 'Heavy rainfall alert for Ernakulam',
      time: '15 min ago',
      bgColor: '#fffbeb',
      borderColor: '#fef3c7',
      titleColor: '#0f172a',
      badgeDotColor: '#ef4444'
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Rescue Team Assigned',
      hasDot: false,
      description: 'Team Alpha-3 is heading to #EX-2847',
      time: '22 min ago',
      bgColor: '#ffffff',
      borderColor: '#e2e8f0',
      titleColor: '#0f172a'
    },
    {
      id: 4,
      icon: '📍',
      title: 'Rescuers En Route',
      hasDot: false,
      description: 'ETA 8 minutes to your location',
      time: '1 hr ago',
      bgColor: '#ffffff',
      borderColor: '#e2e8f0',
      titleColor: '#0f172a'
    },
    {
      id: 5,
      icon: '✅',
      title: 'Shelter Space Available',
      hasDot: false,
      description: 'Vyttila Community Hall — 120 beds freed',
      time: '2 hr ago',
      bgColor: '#ffffff',
      borderColor: '#e2e8f0',
      titleColor: '#0f172a'
    },
    {
      id: 6,
      icon: '🌊',
      title: 'Dam Alert Issued',
      hasDot: false,
      description: 'Idukki dam downstream areas warned',
      time: '3 hr ago',
      bgColor: '#ffffff',
      borderColor: '#e2e8f0',
      titleColor: '#0f172a'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#23252a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Phone Mockup Frame */}
      <div style={{
        position: 'relative',
        width: '390px',
        height: '840px',
        backgroundColor: '#f8fafc',
        borderRadius: '50px',
        boxShadow: '0 30px 90px rgba(0,0,0,0.7), inset 0 0 4px 2px rgba(255,255,255,0.1)',
        border: '11px solid #373940',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none'
      }}>
        
        {/* Dynamic Island */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '118px',
          height: '28px',
          backgroundColor: '#000000',
          borderRadius: '20px',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '10px'
        }}>
          <div style={{
            width: '11px',
            height: '11px',
            backgroundColor: '#0f172a',
            borderRadius: '50%',
            border: '1px solid #1e293b'
          }} />
        </div>

        {/* Top Status Bar */}
        <div style={{
          padding: '14px 28px 4px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          fontWeight: '700',
          color: '#111827',
          zIndex: 40
        }}>
          <span>9:41</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1f2937' }}>
            <Signal size={14} strokeWidth={2.5} />
            <Wifi size={14} strokeWidth={2.5} />
            <BatteryMedium size={17} strokeWidth={2.2} />
          </div>
        </div>

        {/* Demo Quick Selector Capsule */}
        <div style={{
          marginTop: '6px',
          marginRight: 'auto',
          marginLeft: 'auto',
          backgroundColor: '#ffffff',
          padding: '4px 6px',
          borderRadius: '9999px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12px',
          fontWeight: '600',
          zIndex: 30
        }}>
          <span style={{ color: '#64748b', paddingLeft: '8px', fontSize: '11px' }}>Demo:</span>
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 14px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '700',
              backgroundColor: '#dc2626',
              color: '#ffffff',
              boxShadow: '0 2px 6px rgba(220,38,38,0.35)'
            }}
          >
            <User size={13} strokeWidth={2.5} />
            <span>Citizen</span>
          </button>
          <button
            type="button"
            onClick={() => onSwitchRole && onSwitchRole('responder')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 14px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '700',
              backgroundColor: 'transparent',
              color: '#475569'
            }}
          >
            <Truck size={13} strokeWidth={2.5} />
            <span>Responder</span>
          </button>
        </div>

        {/* Scrollable Alerts Body */}
        <div style={{
          flex: 1,
          padding: '10px 18px 12px 18px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>

          {/* Header Title with 2 New Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px', marginBottom: '2px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>
              Alerts
            </h2>
            <span style={{
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              fontSize: '11px',
              fontWeight: '800',
              padding: '3px 10px',
              borderRadius: '9999px'
            }}>
              2 New
            </span>
          </div>

          {/* Alert Cards Feed */}
          {alertsList.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: item.bgColor,
                borderRadius: '18px',
                padding: '12px 14px',
                border: `1.5px solid ${item.borderColor}`,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                cursor: 'pointer',
                transition: 'transform 0.1s ease'
              }}
            >
              {/* Alert Icon */}
              <div style={{ fontSize: '20px', marginTop: '1px' }}>
                {item.icon}
              </div>

              {/* Text Information */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h4 style={{ fontSize: '12.5px', fontWeight: '800', color: item.titleColor }}>
                    {item.title}
                  </h4>
                  {item.hasDot && (
                    <div style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: item.badgeDotColor || '#ef4444',
                      borderRadius: '50%'
                    }} />
                  )}
                </div>

                <p style={{ fontSize: '11px', color: '#475569', fontWeight: '500', marginTop: '2px' }}>
                  {item.description}
                </p>

                <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '600', marginTop: '4px', display: 'block' }}>
                  {item.time}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Tab Navigation Bar */}
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #f1f5f9',
          padding: '8px 12px 16px 12px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          {/* HOME */}
          <div 
            onClick={() => onNavigateTab('home')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🏠</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>HOME</span>
          </div>

          {/* SOS */}
          <div 
            onClick={() => onNavigateTab('sos')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🆘</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>SOS</span>
          </div>

          {/* TRACK */}
          <div 
            onClick={() => onNavigateTab('track')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>📍</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>TRACK</span>
          </div>

          {/* SHELTERS */}
          <div 
            onClick={() => onNavigateTab('shelters')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🏕️</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>SHELTERS</span>
          </div>

          {/* ALERTS ACTIVE */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>🔔</span>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#dc2626', marginTop: '2px' }}>ALERTS</span>
            <div style={{ width: '16px', height: '2.5px', backgroundColor: '#dc2626', borderRadius: '4px', marginTop: '2px' }} />
          </div>
        </div>

      </div>
    </div>
  );
};