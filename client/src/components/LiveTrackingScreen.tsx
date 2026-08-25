import React from 'react';
import { 
  ArrowLeft, 
  Phone, 
  Signal, 
  Wifi, 
  BatteryMedium, 
  User, 
  Truck, 
  ShieldAlert 
} from 'lucide-react';

interface LiveTrackingScreenProps {
  onBack: () => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
  requestId?: string;
}

export const LiveTrackingScreen: React.FC<LiveTrackingScreenProps> = ({
  onBack,
  onSwitchRole,
  requestId = '#EX-2847'
}) => {
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

        {/* Scrollable Body */}
        <div style={{
          flex: 1,
          padding: '8px 18px 14px 18px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>

          {/* Header Title with Back Button & ID */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={onBack}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#475569'
                }}
              >
                <ArrowLeft size={16} strokeWidth={2.5} />
              </button>
              <div>
                <h2 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>
                  Live Rescue Tracking
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '1px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#2563eb', borderRadius: '50%' }} />
                  <span style={{ fontSize: '10px', fontWeight: '800', color: '#2563eb', letterSpacing: '0.4px' }}>
                    LIVE
                  </span>
                </div>
              </div>
            </div>

            <span style={{ fontSize: '12px', fontWeight: '800', color: '#2563eb' }}>
              {requestId}
            </span>
          </div>

          {/* Map Vector Mockup */}
          <div style={{
            width: '100%',
            height: '210px',
            backgroundColor: '#e2f0d9',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
          }}>
            {/* Map Road Grid Lines */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              {/* Vertical Roads */}
              <line x1="40" y1="0" x2="40" y2="210" stroke="#ffffff" strokeWidth="8" />
              <line x1="100" y1="0" x2="100" y2="210" stroke="#ffffff" strokeWidth="10" />
              <line x1="180" y1="0" x2="180" y2="210" stroke="#ffffff" strokeWidth="12" />
              <line x1="260" y1="0" x2="260" y2="210" stroke="#ffffff" strokeWidth="10" />
              <line x1="320" y1="0" x2="320" y2="210" stroke="#ffffff" strokeWidth="8" />

              {/* Horizontal Roads */}
              <line x1="0" y1="35" x2="360" y2="35" stroke="#ffffff" strokeWidth="8" />
              <line x1="0" y1="80" x2="360" y2="80" stroke="#ffffff" strokeWidth="10" />
              <line x1="0" y1="130" x2="360" y2="130" stroke="#ffffff" strokeWidth="12" />
              <line x1="0" y1="180" x2="360" y2="180" stroke="#ffffff" strokeWidth="8" />

              {/* Dotted Route Line between Responder and Citizen */}
              <line 
                x1="260" 
                y1="75" 
                x2="190" 
                y2="130" 
                stroke="#2563eb" 
                strokeWidth="3.5" 
                strokeDasharray="6,6" 
              />
            </svg>

            {/* MAP Tag Top Right */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(255,255,255,0.85)',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '9px',
              fontWeight: '800',
              color: '#64748b'
            }}>
              MAP
            </div>

            {/* Shelter Marker (Green 'S') */}
            <div style={{
              position: 'absolute',
              left: '90px',
              top: '70px',
              width: '22px',
              height: '22px',
              backgroundColor: '#16a34a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: '800',
              boxShadow: '0 2px 6px rgba(22,163,74,0.4)',
              border: '2px solid #ffffff'
            }}>
              S
            </div>

            {/* Responder Live Marker (Blue 'R') */}
            <div style={{
              position: 'absolute',
              left: '250px',
              top: '64px',
              width: '22px',
              height: '22px',
              backgroundColor: '#2563eb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: '800',
              boxShadow: '0 2px 8px rgba(37,99,235,0.45)',
              border: '2px solid #ffffff'
            }}>
              R
            </div>

            {/* Citizen Incident Marker (Red with Ripple Circle) */}
            <div style={{
              position: 'absolute',
              left: '178px',
              top: '118px',
              width: '38px',
              height: '38px',
              backgroundColor: 'rgba(220, 38, 38, 0.25)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '900',
                border: '2px solid #ffffff',
                boxShadow: '0 2px 8px rgba(220,38,38,0.5)'
              }}>
                !
              </div>
            </div>
          </div>

          {/* Stats Bar (ETA, Distance, Status) */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            padding: '12px 16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            alignItems: 'center',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: '700', color: '#64748b' }}>ETA</span>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#2563eb', marginTop: '2px' }}>8 min</h3>
            </div>

            <div style={{ textAlign: 'center', borderLeft: '1px solid #f1f5f9', borderRight: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '10px', fontWeight: '700', color: '#64748b' }}>DISTANCE</span>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>2.4 km</h3>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '10px', fontWeight: '700', color: '#64748b' }}>STATUS</span>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#ea580c', marginTop: '2px' }}>En Route</h3>
            </div>
          </div>

          {/* Rescue Team Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            padding: '12px 16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
          }}>
            <p style={{
              fontSize: '10px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              RESCUE TEAM
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  backgroundColor: '#2563eb',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '14px'
                }}>
                  T3
                </div>

                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>
                    Team Alpha-3
                  </h4>
                  <p style={{ fontSize: '10.5px', color: '#64748b', fontWeight: '500', marginTop: '1px' }}>
                    NDRF Unit · Kochi District
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <div style={{ width: '5px', height: '5px', backgroundColor: '#16a34a', borderRadius: '50%' }} />
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#16a34a' }}>
                      Responding now
                    </span>
                  </div>
                </div>
              </div>

              {/* Call Button */}
              <a
                href="tel:112"
                style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#16a34a',
                  textDecoration: 'none',
                  border: '1px solid #dcfce7',
                  boxShadow: '0 2px 6px rgba(22,163,74,0.15)'
                }}
              >
                <Phone size={17} strokeWidth={2.4} />
              </a>
            </div>
          </div>

          {/* Live Updates Feed */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            padding: '12px 16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
          }}>
            <p style={{
              fontSize: '10px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              LIVE UPDATES
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <div style={{ width: '7px', height: '7px', backgroundColor: '#2563eb', borderRadius: '50%', marginTop: '5px' }} />
                <div>
                  <h5 style={{ fontSize: '11.5px', fontWeight: '700', color: '#0f172a' }}>
                    Team Alpha-3 is on the way — ETA 8 minutes
                  </h5>
                  <span style={{ fontSize: '9.5px', color: '#64748b', fontWeight: '500' }}>09:46 AM</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <div style={{ width: '7px', height: '7px', backgroundColor: '#2563eb', borderRadius: '50%', marginTop: '5px' }} />
                <div>
                  <h5 style={{ fontSize: '11.5px', fontWeight: '700', color: '#0f172a' }}>
                    Rescue team has been assigned to you
                  </h5>
                  <span style={{ fontSize: '9.5px', color: '#64748b', fontWeight: '500' }}>09:44 AM</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <div style={{ width: '7px', height: '7px', backgroundColor: '#16a34a', borderRadius: '50%', marginTop: '5px' }} />
                <div>
                  <h5 style={{ fontSize: '11.5px', fontWeight: '700', color: '#0f172a' }}>
                    Your emergency request was received
                  </h5>
                  <span style={{ fontSize: '9.5px', color: '#64748b', fontWeight: '500' }}>09:41 AM</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Logo Footer & Home Bar */}
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