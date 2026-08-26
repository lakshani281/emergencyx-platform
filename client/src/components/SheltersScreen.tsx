import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Navigation, 
  Phone, 
  Search, 
  Signal, 
  Wifi, 
  BatteryMedium,
  User,
  Truck
} from 'lucide-react';

interface SheltersScreenProps {
  onBack: () => void;
  onNavigateTab: (tab: 'home' | 'sos' | 'track' | 'shelters' | 'alerts') => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
}

export const SheltersScreen: React.FC<SheltersScreenProps> = ({ 
  onBack, 
  onNavigateTab,
  onSwitchRole 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const sheltersList = [
    {
      id: 1,
      name: 'Ratnapura Central Relief Camp',
      location: 'Town Hall Grounds, Ratnapura',
      distance: '0.8 km',
      capacity: '60% Full',
      status: 'Open',
      statusBg: '#dcfce7',
      statusColor: '#15803d',
      occupancyRatio: 60,
      phone: '0452222222'
    },
    {
      id: 2,
      name: 'Ferguson Girls’ High School Shelter',
      location: 'Wahalwatte Road, Ratnapura',
      distance: '1.4 km',
      capacity: 'Full (95%)',
      status: 'Full',
      statusBg: '#ffedd5',
      statusColor: '#c2410c',
      occupancyRatio: 95,
      phone: '0452222333'
    },
    {
      id: 3,
      name: 'Sri Sudharmarama Temple Hall',
      location: 'Hidellana, Ratnapura',
      distance: '2.1 km',
      capacity: '30% Full',
      status: 'Open',
      statusBg: '#dcfce7',
      statusColor: '#15803d',
      occupancyRatio: 30,
      phone: '0452222444'
    },
    {
      id: 4,
      name: 'Saman Devalaya Community Center',
      location: 'Sabaragamuwa District',
      distance: '3.5 km',
      capacity: 'Available',
      status: 'Open',
      statusBg: '#dcfce7',
      statusColor: '#15803d',
      occupancyRatio: 15,
      phone: '0452222555'
    }
  ];

  const filteredShelters = sheltersList.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        {/* Scrollable Shelters Body */}
        <div style={{
          flex: 1,
          padding: '10px 18px 12px 18px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>

          {/* Header Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '2px' }}>
            <button
              type="button"
              onClick={onBack}
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #e2e8f0',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
              }}
            >
              <ArrowLeft size={18} color="#0f172a" />
            </button>
            <h2 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a' }}>
              Nearby Shelters
            </h2>
          </div>

          {/* Search Box */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '8px 14px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
          }}>
            <Search size={16} color="#94a3b8" />
            <input
              type="text"
              placeholder="Search by shelter name or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '12px',
                width: '100%',
                color: '#0f172a',
                fontWeight: '600'
              }}
            />
          </div>

          {/* Shelters List Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredShelters.map((shelter) => (
              <div
                key={shelter.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '14px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>{shelter.name}</h4>
                      <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '500', marginTop: '1px' }}>{shelter.location}</p>
                    </div>
                  </div>

                  <span style={{
                    backgroundColor: shelter.statusBg,
                    color: shelter.statusColor,
                    fontSize: '9.5px',
                    fontWeight: '800',
                    padding: '2px 8px',
                    borderRadius: '9999px'
                  }}>
                    {shelter.status}
                  </span>
                </div>

                {/* Capacity Progress Bar */}
                <div style={{ marginTop: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', fontWeight: '600', color: '#64748b', marginBottom: '4px' }}>
                    <span>Capacity: {shelter.capacity}</span>
                    <span>{shelter.distance}</span>
                  </div>
                  <div style={{ width: '100%', height: '5px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${shelter.occupancyRatio}%`,
                      height: '100%',
                      backgroundColor: shelter.occupancyRatio > 80 ? '#ea580c' : '#16a34a'
                    }} />
                  </div>
                </div>

                {/* Directions and Call Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '4px' }}>
                  <button
                    type="button"
                    style={{
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      border: '1px solid #dbeafe',
                      borderRadius: '10px',
                      padding: '7px 0',
                      fontSize: '11px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    <Navigation size={12} />
                    <span>Get Directions</span>
                  </button>

                  <a
                    href={`tel:${shelter.phone}`}
                    style={{
                      backgroundColor: '#f8fafc',
                      color: '#475569',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '7px 0',
                      fontSize: '11px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    <Phone size={12} />
                    <span>Call Shelter</span>
                  </a>
                </div>
              </div>
            ))}
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
          <div onClick={() => onNavigateTab('home')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🏠</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>HOME</span>
          </div>

          <div onClick={() => onNavigateTab('sos')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🆘</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>SOS</span>
          </div>

          <div onClick={() => onNavigateTab('track')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>📍</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>TRACK</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>🏕️</span>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#dc2626', marginTop: '2px' }}>SHELTERS</span>
            <div style={{ width: '16px', height: '2.5px', backgroundColor: '#dc2626', borderRadius: '4px', marginTop: '2px' }} />
          </div>

          <div onClick={() => onNavigateTab('alerts')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🔔</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>ALERTS</span>
          </div>
        </div>

      </div>
    </div>
  );
};