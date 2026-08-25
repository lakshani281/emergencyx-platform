import React from 'react';
import { 
  Check, 
  Signal, 
  Wifi, 
  BatteryMedium, 
  User, 
  Truck, 
  ShieldAlert,
  MapPin
} from 'lucide-react';

interface SosStatusScreenProps {
  onBackToHome: () => void;
  onTrackLiveRescue?: () => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
  reportData?: {
    requestId?: string;
    location?: string;
    type?: string;
    severity?: string;
    adults?: number;
    children?: number;
    reportedTime?: string;
  };
}

export const SosStatusScreen: React.FC<SosStatusScreenProps> = ({
  onBackToHome,
  onTrackLiveRescue,
  onSwitchRole,
  reportData = {
    requestId: '#EX-2847',
    location: 'MG Road, Ernakulam',
    type: 'Medical Assistance',
    severity: 'Critical',
    adults: 2,
    children: 1,
    reportedTime: '09:41 AM, Aug 23'
  }
}) => {
  const steps = [
    { id: 1, title: 'Reported', sub: 'Completed', status: 'completed' },
    { id: 2, title: 'Assigned', sub: 'In progress', status: 'in-progress' },
    { id: 3, title: 'En Route', sub: '', status: 'pending' },
    { id: 4, title: 'Arrived', sub: '', status: 'pending' },
    { id: 5, title: 'Resolved', sub: '', status: 'pending' },
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
        backgroundColor: '#ffffff',
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

        {/* Top Demo Quick Selector */}
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

        {/* Main Content Area (Scrollable) */}
        <div style={{
          flex: 1,
          padding: '10px 20px 14px 20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>

          {/* Success Banner */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '4px'
          }}>
            {/* Green Rounded Checkbox Icon */}
            <div style={{
              width: '56px',
              height: '56px',
              backgroundColor: '#ecfdf5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #a7f3d0',
              marginBottom: '10px'
            }}>
              <div style={{
                width: '34px',
                height: '34px',
                backgroundColor: '#10b981',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <Check size={22} strokeWidth={3.5} />
              </div>
            </div>

            <h2 style={{ fontSize: '17px', fontWeight: '800', color: '#16a34a' }}>
              SOS Sent Successfully
            </h2>
            <p style={{ fontSize: '11.5px', color: '#64748b', fontWeight: '500', marginTop: '3px' }}>
              Responders near you have been alerted
            </p>
          </div>

          {/* Request Details Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            border: '1.5px solid #e2e8f0',
            padding: '14px 16px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
          }}>
            <p style={{
              fontSize: '10.5px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '12px',
              textTransform: 'uppercase'
            }}>
              REQUEST DETAILS
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Request ID</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#2563eb' }}>{reportData.requestId}</span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Location</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>{reportData.location}</span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Type</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>{reportData.type}</span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Severity</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#dc2626' }}>{reportData.severity}</span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>People</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>
                  {reportData.adults} Adults, {reportData.children} Child
                </span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Reported</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>{reportData.reportedTime}</span>
              </div>

            </div>
          </div>

          {/* Response Progress Timeline Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            border: '1.5px solid #e2e8f0',
            padding: '14px 16px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
          }}>
            <p style={{
              fontSize: '10.5px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '14px',
              textTransform: 'uppercase'
            }}>
              RESPONSE PROGRESS
            </p>

            {/* Vertical Stepper List */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;

                return (
                  <div key={step.id} style={{ display: 'flex', gap: '14px', position: 'relative' }}>
                    
                    {/* Left Icon / Number Circle */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      {step.status === 'completed' ? (
                        <div style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: '#ecfdf5',
                          border: '1.8px solid #10b981',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#10b981',
                          zIndex: 2
                        }}>
                          <Check size={14} strokeWidth={3.5} />
                        </div>
                      ) : step.status === 'in-progress' ? (
                        <div style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: '#eff6ff',
                          border: '1.8px solid #2563eb',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#2563eb',
                          fontSize: '12px',
                          fontWeight: '800',
                          zIndex: 2
                        }}>
                          {step.id}
                        </div>
                      ) : (
                        <div style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: '#f8fafc',
                          border: '1.5px solid #cbd5e1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#64748b',
                          fontSize: '11px',
                          fontWeight: '700',
                          zIndex: 2
                        }}>
                          {step.id}
                        </div>
                      )}

                      {/* Connecting Line */}
                      {!isLast && (
                        <div style={{
                          width: '2px',
                          height: '24px',
                          backgroundColor: step.status === 'completed' ? '#10b981' : '#e2e8f0',
                          margin: '2px 0'
                        }} />
                      )}
                    </div>

                    {/* Step Text Info */}
                    <div style={{ paddingTop: '2px', paddingBottom: isLast ? '0' : '14px' }}>
                      <h4 style={{
                        fontSize: '13px',
                        fontWeight: '800',
                        color: step.status === 'pending' ? '#64748b' : '#0f172a'
                      }}>
                        {step.title}
                      </h4>
                      {step.sub && (
                        <p style={{
                          fontSize: '11px',
                          fontWeight: '600',
                          color: step.status === 'completed' ? '#10b981' : '#2563eb',
                          marginTop: '1px'
                        }}>
                          {step.status === 'in-progress' ? `• ${step.sub}` : step.sub}
                        </p>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
            <button
              type="button"
              onClick={onTrackLiveRescue}
              style={{
                width: '100%',
                padding: '13px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '16px',
                fontSize: '13px',
                fontWeight: '800',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 6px 18px rgba(37,99,235,0.3)',
                transition: 'transform 0.1s'
              }}
            >
              <span>📍</span>
              <span>Track Live Rescue</span>
            </button>

            <button
              type="button"
              onClick={onBackToHome}
              style={{
                width: '100%',
                padding: '11px',
                backgroundColor: '#ffffff',
                color: '#475569',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              Back to Home
            </button>
          </div>

        </div>

        {/* Bottom Logo & Home Bar */}
        <div style={{
          width: '100%',
          paddingBottom: '12px',
          paddingTop: '6px',
          background: 'linear-gradient(to top, #e2e8f0, transparent)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', opacity: 0.85 }}>
            <div style={{
              width: '18px',
              height: '18px',
              backgroundColor: '#dc2626',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShieldAlert size={11} color="#ffffff" strokeWidth={2.6} />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>
              Emergency<span style={{ color: '#dc2626' }}>X</span>
            </span>
          </div>

          <div style={{
            width: '120px',
            height: '4px',
            backgroundColor: '#94a3b8',
            borderRadius: '9999px',
            marginTop: '2px'
          }} />
        </div>

      </div>
    </div>
  );
};