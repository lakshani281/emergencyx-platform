import React from 'react';
import { 
  Signal, 
  Wifi, 
  BatteryMedium, 
  User, 
  Truck, 
  MapPin, 
  Users, 
  Map, 
  Phone, 
  Check 
} from 'lucide-react';

interface ResponderIncidentsScreenProps {
  onNavigateTab: (tab: 'dashboard' | 'incidents' | 'tasks' | 'alerts') => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
  onAcceptTask?: (incidentId: string) => void;
}

export const ResponderIncidentsScreen: React.FC<ResponderIncidentsScreenProps> = ({
  onNavigateTab,
  onSwitchRole,
  onAcceptTask
}) => {
  const incidents = [
    {
      id: '#EX-2847',
      title: 'Medical Emergency',
      severity: 'Critical',
      time: '5 min ago',
      distance: '0.3 km',
      description: 'Elderly person unconscious due to flood panic, needs oxygen support',
      location: 'Main Street, Ratnapura',
      people: '3 people',
      badgeBg: '#fee2e2',
      badgeColor: '#dc2626',
      btnBg: '#dc2626',
      btnHover: '#b91c1c'
    },
    {
      id: '#EX-2851',
      title: 'Flood Rescue',
      severity: 'Critical',
      time: '12 min ago',
      distance: '1.2 km',
      description: 'Family stranded on rooftop near Kalu Ganga river bank',
      location: 'Pelmadulla Road, Ratnapura',
      people: '7 people',
      badgeBg: '#fee2e2',
      badgeColor: '#dc2626',
      btnBg: '#dc2626',
      btnHover: '#b91c1c'
    },
    {
      id: '#EX-2839',
      title: 'Boat Rescue',
      severity: 'Moderate',
      time: '28 min ago',
      distance: '2.4 km',
      description: 'Villagers need boat extraction due to rising water level',
      location: 'Kiriella Canal Area',
      people: '2 people',
      badgeBg: '#ffedd5',
      badgeColor: '#ea580c',
      btnBg: '#2563eb',
      btnHover: '#1d4ed8'
    },
    {
      id: '#EX-2830',
      title: 'Dry Rations & Water',
      severity: 'Low',
      time: '45 min ago',
      distance: '3.8 km',
      description: 'Community temple shelter needs drinking water supplies',
      location: 'Hidellana Community Center',
      people: '12 people',
      badgeBg: '#dcfce7',
      badgeColor: '#16a34a',
      btnBg: '#2563eb',
      btnHover: '#1d4ed8'
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

        {/* Top Demo Selector Capsule */}
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
            onClick={() => onSwitchRole && onSwitchRole('citizen')}
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
            <User size={13} strokeWidth={2.5} />
            <span>Citizen</span>
          </button>
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
              backgroundColor: '#2563eb',
              color: '#ffffff',
              boxShadow: '0 2px 6px rgba(37,99,235,0.35)'
            }}
          >
            <Truck size={13} strokeWidth={2.5} />
            <span>Responder</span>
          </button>
        </div>

        {/* Scrollable Incidents Body */}
        <div style={{
          flex: 1,
          padding: '10px 18px 12px 18px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>

          {/* Header Title with 4 Active Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px', marginBottom: '2px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>
              Nearby Incidents
            </h2>
            <span style={{
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              fontSize: '11px',
              fontWeight: '800',
              padding: '3px 10px',
              borderRadius: '9999px'
            }}>
              4 Active
            </span>
          </div>

          {/* Incidents Cards List */}
          {incidents.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '14px 16px',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: '800', color: '#2563eb' }}>
                    {item.id}
                  </span>
                  <span style={{
                    backgroundColor: item.badgeBg,
                    color: item.badgeColor,
                    fontSize: '10px',
                    fontWeight: '800',
                    padding: '2px 8px',
                    borderRadius: '9999px'
                  }}>
                    {item.severity}
                  </span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '10.5px', color: '#64748b', fontWeight: '600' }}>
                    {item.time}
                  </span>
                  <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginTop: '1px' }}>
                    {item.distance}
                  </h4>
                </div>
              </div>

              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', marginTop: '-4px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '11.5px', color: '#475569', fontWeight: '500', lineHeight: '1.4' }}>
                {item.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '2px', fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} color="#e11d48" />
                  <span>{item.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Users size={13} color="#475569" />
                  <span>{item.people}</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 0.5fr', gap: '8px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => onAcceptTask && onAcceptTask(item.id)}
                  style={{
                    backgroundColor: item.btnBg,
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '9px 0',
                    fontSize: '11.5px',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                  <span>Accept Task</span>
                </button>

                <button
                  type="button"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#334155',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '9px 0',
                    fontSize: '11.5px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <Map size={13} strokeWidth={2.4} />
                  <span>Map</span>
                </button>

                <a
                  href="tel:112"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#dc2626',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={14} strokeWidth={2.4} />
                </a>
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
          <div 
            onClick={() => onNavigateTab('dashboard')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>📊</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>DASHBOARD</span>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>🚨</span>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#2563eb', marginTop: '2px' }}>INCIDENTS</span>
            <div style={{ width: '16px', height: '2.5px', backgroundColor: '#2563eb', borderRadius: '4px', marginTop: '2px' }} />
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '2px',
              backgroundColor: '#dc2626',
              color: '#ffffff',
              fontSize: '8.5px',
              fontWeight: '800',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              4
            </span>
          </div>

          <div 
            onClick={() => onNavigateTab('tasks')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>✅</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>TASKS</span>
          </div>

          <div 
            onClick={() => onNavigateTab('alerts')}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🔔</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>ALERTS</span>
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              backgroundColor: '#dc2626',
              color: '#ffffff',
              fontSize: '8.5px',
              fontWeight: '800',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              2
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};