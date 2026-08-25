import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  User, 
  Truck, 
  Signal, 
  Wifi, 
  BatteryMedium, 
  Camera, 
  Plus, 
  Minus, 
  ShieldAlert 
} from 'lucide-react';

interface ReportEmergencyScreenProps {
  onBack: () => void;
  onSubmitSuccess?: (data: any) => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
}

export const ReportEmergencyScreen: React.FC<ReportEmergencyScreenProps> = ({
  onBack,
  onSubmitSuccess,
  onSwitchRole,
}) => {
  const [emergencyType, setEmergencyType] = useState<string>('Flood');
  const [severity, setSeverity] = useState<'Critical' | 'Moderate' | 'Low'>('Critical');
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [description, setDescription] = useState<string>('');

  const emergencyTypes = [
    { id: 'Flood', label: 'Flood', icon: '🌊' },
    { id: 'Medical', label: 'Medical', icon: '🚑' },
    { id: 'Boat Rescue', label: 'Boat Rescue', icon: '⛵' },
    { id: 'Food/Water', label: 'Food/Water', icon: '🍚' },
    { id: 'Evacuation', label: 'Evacuation', icon: '🏃' },
    { id: 'Other', label: 'Other', icon: '🆘' },
  ];

  const handleSubmit = () => {
    const reportData = {
      type: emergencyType,
      severity,
      peopleAffected: { adults, children },
      description,
      location: {
        address: 'Ernakulam, Kochi, Kerala',
        lat: 9.9312,
        lng: 76.2673,
      },
    };

    if (onSubmitSuccess) {
      onSubmitSuccess(reportData);
    } else {
      alert(`🚨 SOS Sent Successfully!\nType: ${emergencyType}\nSeverity: ${severity}\nPeople: ${adults + children}`);
    }
  };

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

        {/* Form Body Container (Scrollable) */}
        <div style={{
          flex: 1,
          padding: '10px 20px 14px 20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>

          {/* Header Title with Back Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
            <button
              onClick={onBack}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#f1f5f9',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#475569'
              }}
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>
                Report Emergency
              </h2>
              <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '500', marginTop: '1px' }}>
                Your request goes to nearest responders
              </p>
            </div>
          </div>

          {/* Detected Location Card */}
          <div style={{
            backgroundColor: '#eff6ff',
            border: '1.5px solid #bfdbfe',
            borderRadius: '18px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(37,99,235,0.06)'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ marginTop: '2px', color: '#e11d48' }}>
                <MapPin size={22} fill="#e11d48" color="#ffffff" />
              </div>
              <div>
                <span style={{ fontSize: '10.5px', fontWeight: '700', color: '#2563eb' }}>
                  Detected Location
                </span>
                <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginTop: '1px' }}>
                  Ernakulam, Kochi, Kerala
                </h4>
                <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '500' }}>
                  9.9312°N, 76.2673°E
                </span>
              </div>
            </div>

            <button style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '10px',
              fontSize: '11.5px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(37,99,235,0.3)'
            }}>
              Update
            </button>
          </div>

          {/* Emergency Type Selection */}
          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              EMERGENCY TYPE
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {emergencyTypes.map((item) => {
                const isSelected = emergencyType === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setEmergencyType(item.id)}
                    style={{
                      cursor: 'pointer',
                      borderRadius: '16px',
                      padding: '14px 6px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      backgroundColor: isSelected ? '#fff1f2' : '#ffffff',
                      border: isSelected ? '1.8px solid #dc2626' : '1px solid #e2e8f0',
                      boxShadow: isSelected ? '0 4px 12px rgba(220,38,38,0.12)' : '0 2px 4px rgba(0,0,0,0.02)',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: isSelected ? '#dc2626' : '#334155'
                    }}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How Serious (Severity) */}
          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              HOW SERIOUS?
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {(['Critical', 'Moderate', 'Low'] as const).map((lvl) => {
                const isSelected = severity === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSeverity(lvl)}
                    style={{
                      padding: '10px 0',
                      borderRadius: '14px',
                      border: isSelected ? '1.8px solid #dc2626' : '1px solid #e2e8f0',
                      backgroundColor: isSelected ? '#ffffff' : '#ffffff',
                      color: isSelected ? '#0f172a' : '#64748b',
                      fontSize: '12px',
                      fontWeight: isSelected ? '800' : '600',
                      cursor: 'pointer',
                      boxShadow: isSelected ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                      transition: 'all 0.15s'
                    }}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>

          {/* People Affected Counters */}
          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              PEOPLE AFFECTED
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              
              {/* Adults Counter */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                padding: '10px 14px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>Adults</span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' }}>
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#e2e8f0',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#475569'
                    }}
                  >
                    <Minus size={14} strokeWidth={3} />
                  </button>
                  <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#2563eb',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#ffffff'
                    }}
                  >
                    <Plus size={14} strokeWidth={3} />
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                padding: '10px 14px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>Children</span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' }}>
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#e2e8f0',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#475569'
                    }}
                  >
                    <Minus size={14} strokeWidth={3} />
                  </button>
                  <span style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#2563eb',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#ffffff'
                    }}
                  >
                    <Plus size={14} strokeWidth={3} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Tell Us More (Textarea) */}
          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '8px',
              textTransform: 'uppercase'
            }}>
              TELL US MORE
            </p>
            <textarea
              rows={3}
              placeholder="Describe what's happening..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '16px',
                border: '1.5px solid #e2e8f0',
                fontSize: '12px',
                color: '#0f172a',
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Add Photo Button */}
          <button
            type="button"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#ffffff',
              border: '1.5px dashed #cbd5e1',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#475569',
              cursor: 'pointer'
            }}
          >
            <Camera size={16} color="#64748b" />
            <span>Add a photo <span style={{ color: '#94a3b8' }}>(optional)</span></span>
          </button>

          {/* Send SOS Action Button */}
          <div style={{ paddingTop: '4px' }}>
            <button
              onClick={handleSubmit}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '16px',
                fontSize: '14px',
                fontWeight: '800',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(220, 38, 38, 0.35)',
                transition: 'transform 0.1s'
              }}
            >
              <span>🆘</span>
              <span>SEND SOS</span>
            </button>
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