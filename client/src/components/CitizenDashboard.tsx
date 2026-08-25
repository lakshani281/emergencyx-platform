import React from 'react';
import { 
  ShieldAlert, 
  MapPin, 
  Bell, 
  AlertTriangle, 
  CheckCircle2, 
  Signal, 
  Wifi, 
  BatteryMedium,
  User,
  Truck
} from 'lucide-react';

interface CitizenDashboardProps {
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
  onSosPress?: () => void;
  onNavigateShelters?: () => void;
  onNavigateTrack?: () => void;
  onNavigateAlerts?: () => void;
}

export const CitizenDashboard: React.FC<CitizenDashboardProps> = ({ 
  onSwitchRole, 
  onSosPress,
  onNavigateShelters,
  onNavigateTrack,
  onNavigateAlerts
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
          marginTop: '8px',
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

        {/* Scrollable Dashboard Body */}
        <div style={{
          flex: 1,
          padding: '12px 20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>

          {/* Header Profile Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                backgroundColor: '#dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)'
              }}>
                <ShieldAlert size={22} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#dc2626', fontSize: '11px', fontWeight: '700' }}>
                  <MapPin size={11} strokeWidth={2.5} />
                  <span>Ernakulam, Kochi</span>
                </div>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>
                  Hello, Arjun 👋
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div 
                onClick={onNavigateAlerts}
                style={{
                  position: 'relative',
                  width: '38px',
                  height: '38px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: '1px solid #f1f5f9',
                  cursor: 'pointer'
                }}
              >
                <Bell size={18} color="#f59e0b" fill="#fef3c7" strokeWidth={2} />
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  fontSize: '9px',
                  fontWeight: '800',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  2
                </span>
              </div>

              <div style={{
                width: '38px',
                height: '38px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '15px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(37,99,235,0.3)'
              }}>
                A
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div style={{
            backgroundColor: '#fffbeb',
            border: '1.5px solid #fef3c7',
            borderRadius: '16px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 6px rgba(245,158,11,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle size={22} color="#d97706" strokeWidth={2.4} />
              <div>
                <div style={{ fontSize: '11px', fontWeight: '800', color: '#b45309', letterSpacing: '0.4px' }}>
                  FLOOD WARNING
                </div>
                <div style={{ fontSize: '11.5px', fontWeight: '600', color: '#1e293b', marginTop: '1px' }}>
                  Heavy rainfall alert for your district
                </div>
              </div>
            </div>
            <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600' }}>2m</span>
          </div>

          {/* SOS Pulsing Circle Area */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '4px'
          }}>
            <p style={{
              fontSize: '10.5px',
              fontWeight: '800',
              letterSpacing: '1px',
              color: '#64748b',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              Tap in an emergency
            </p>

            <div 
              onClick={onSosPress}
              style={{
                width: '180px',
                height: '180px',
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: '0 0 0 10px rgba(239, 68, 68, 0.05)'
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{
                width: '144px',
                height: '144px',
                backgroundColor: 'rgba(239, 68, 68, 0.25)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '110px',
                  height: '110px',
                  background: 'radial-gradient(circle, #ef4444 0%, #dc2626 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 30px rgba(220, 38, 38, 0.45), inset 0 2px 6px rgba(255,255,255,0.4)',
                  color: '#ffffff'
                }}>
                  <span style={{ fontSize: '26px', fontWeight: '900', letterSpacing: '-0.5px', lineHeight: '1' }}>
                    SOS
                  </span>
                  <span style={{ fontSize: '8.5px', fontWeight: '800', letterSpacing: '0.6px', marginTop: '4px', opacity: 0.9 }}>
                    PRESS FOR HELP
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action 3 Icon Buttons (Hotline Removed) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '6px' }}>
            
            <div 
              onClick={onNavigateShelters}
              style={{
                backgroundColor: '#f0fdf4',
                borderRadius: '16px',
                padding: '12px 6px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                border: '1px solid #dcfce7',
                transition: 'transform 0.1s'
              }}
            >
              <span style={{ fontSize: '22px' }}>🏕️</span>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#16a34a', marginTop: '4px' }}>Shelters</span>
            </div>

            <div 
              onClick={onNavigateTrack}
              style={{
                backgroundColor: '#f5f3ff',
                borderRadius: '16px',
                padding: '12px 6px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                border: '1px solid #ede9fe',
                transition: 'transform 0.1s'
              }}
            >
              <span style={{ fontSize: '22px' }}>📍</span>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#2563eb', marginTop: '4px' }}>Track</span>
            </div>

            <div 
              onClick={onNavigateAlerts}
              style={{
                backgroundColor: '#fffbeb',
                borderRadius: '16px',
                padding: '12px 6px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                border: '1px solid #fef3c7',
                transition: 'transform 0.1s'
              }}
            >
              <span style={{ fontSize: '22px' }}>🔔</span>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#d97706', marginTop: '4px' }}>Alerts</span>
            </div>

          </div>

          {/* Nearby Shelters Section Preview */}
          <div style={{ marginTop: '2px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>Nearby Shelters</h3>
              <button 
                onClick={onNavigateShelters}
                style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}
              >
                View all →
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
              <div 
                onClick={onNavigateShelters}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '10px 12px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  🏕️
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Ernakulam Relief Camp</h4>
                    <span style={{
                      backgroundColor: '#dcfce7',
                      color: '#15803d',
                      fontSize: '9px',
                      fontWeight: '800',
                      padding: '2px 8px',
                      borderRadius: '9999px'
                    }}>
                      Open
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <div style={{ flex: 1, height: '4px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '60%', height: '100%', backgroundColor: '#16a34a' }} />
                    </div>
                    <span style={{ fontSize: '9.5px', color: '#64748b', fontWeight: '600' }}>0.8 km</span>
                  </div>
                </div>
              </div>

              <div 
                onClick={onNavigateShelters}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '10px 12px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: '#fff7ed',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  🏕️
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>Govt. HS Emergency Shelter</h4>
                    <span style={{
                      backgroundColor: '#ffedd5',
                      color: '#c2410c',
                      fontSize: '9px',
                      fontWeight: '800',
                      padding: '2px 8px',
                      borderRadius: '9999px'
                    }}>
                      Full
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <div style={{ flex: 1, height: '4px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '92%', height: '100%', backgroundColor: '#ea580c' }} />
                    </div>
                    <span style={{ fontSize: '9.5px', color: '#64748b', fontWeight: '600' }}>1.4 km</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Last Activity Section */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>Last Activity</h3>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '12px 14px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#dcfce7',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#16a34a'
              }}>
                <CheckCircle2 size={20} strokeWidth={2.5} />
              </div>

              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>
                  Request #EX1024 — <span style={{ color: '#16a34a' }}>Resolved</span>
                </h4>
                <p style={{ fontSize: '10px', color: '#64748b', marginTop: '2px', fontWeight: '500' }}>
                  Medical Assistance · 3 days ago
                </p>
              </div>
            </div>
          </div>

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
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>🏠</span>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#dc2626', marginTop: '2px' }}>HOME</span>
            <div style={{ width: '16px', height: '2.5px', backgroundColor: '#dc2626', borderRadius: '4px', marginTop: '2px' }} />
          </div>

          <div onClick={onSosPress} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🆘</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>SOS</span>
          </div>

          <div onClick={onNavigateTrack} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>📍</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>TRACK</span>
          </div>

          <div onClick={onNavigateShelters} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🏕️</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>SHELTERS</span>
          </div>

          <div onClick={onNavigateAlerts} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🔔</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>ALERTS</span>
          </div>

        </div>

      </div>
    </div>
  );
};