import React, { useState } from 'react';
import { User, Truck, ShieldAlert, Wifi, BatteryMedium, Signal, CheckCircle } from 'lucide-react';

interface LoginScreenProps {
  onLoginSuccess?: (role: 'citizen' | 'responder', email: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [role, setRole] = useState<'citizen' | 'responder'>('citizen');
  const [email, setEmail] = useState<string>('demo@emergencyx.com');
  const [password, setPassword] = useState<string>('••••••••');

  const handleRoleChange = (selectedRole: 'citizen' | 'responder') => {
    setRole(selectedRole);
    if (selectedRole === 'citizen') {
      setEmail('demo@emergencyx.com');
    } else {
      setEmail('responder@emergencyx.com');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess(role, email);
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
        
        {/* Dynamic Island (iPhone Notch) */}
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
          marginTop: '10px',
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
          fontWeight: '600'
        }}>
          <span style={{ color: '#64748b', paddingLeft: '8px', fontSize: '11px' }}>Demo:</span>
          <button
            type="button"
            onClick={() => handleRoleChange('citizen')}
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
              transition: 'all 0.2s ease',
              backgroundColor: role === 'citizen' ? '#dc2626' : 'transparent',
              color: role === 'citizen' ? '#ffffff' : '#475569',
              boxShadow: role === 'citizen' ? '0 2px 6px rgba(220,38,38,0.35)' : 'none'
            }}
          >
            <User size={13} strokeWidth={2.5} />
            <span>Citizen</span>
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange('responder')}
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
              transition: 'all 0.2s ease',
              backgroundColor: role === 'responder' ? '#dc2626' : 'transparent',
              color: role === 'responder' ? '#ffffff' : '#475569',
              boxShadow: role === 'responder' ? '0 2px 6px rgba(220,38,38,0.35)' : 'none'
            }}
          >
            <Truck size={13} strokeWidth={2.5} />
            <span>Responder</span>
          </button>
        </div>

        {/* Form Body Container */}
        <div style={{
          flex: 1,
          padding: '10px 24px 8px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          overflowY: 'auto'
        }}>
          
          {/* Main Logo & Shield */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '8px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#dc2626',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(220, 38, 38, 0.28)',
              marginBottom: '10px'
            }}>
              <ShieldAlert size={34} color="#ffffff" strokeWidth={2.2} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldAlert size={20} color="#dc2626" strokeWidth={2.5} />
              <h1 style={{
                fontSize: '20px',
                fontWeight: '800',
                letterSpacing: '-0.4px',
                color: '#0f172a'
              }}>
                Emergency<span style={{ color: '#dc2626' }}>X</span>
              </h1>
            </div>

            <p style={{
              fontSize: '9.5px',
              fontWeight: '700',
              letterSpacing: '1.2px',
              color: '#64748b',
              marginTop: '3px',
              textTransform: 'uppercase'
            }}>
              Smart Disaster Response
            </p>
          </div>

          {/* Selector Heading */}
          <p style={{
            fontSize: '11px',
            fontWeight: '800',
            color: '#64748b',
            letterSpacing: '0.6px',
            marginBottom: '8px',
            textTransform: 'uppercase'
          }}>
            I AM A...
          </p>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
            
            {/* Citizen Card */}
            <div
              onClick={() => handleRoleChange('citizen')}
              style={{
                cursor: 'pointer',
                borderRadius: '16px',
                padding: '14px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                backgroundColor: role === 'citizen' ? '#fff1f2' : '#f8fafc',
                border: role === 'citizen' ? '1.8px solid #dc2626' : '1.5px solid #e2e8f0',
                boxShadow: role === 'citizen' ? '0 4px 12px rgba(220,38,38,0.12)' : 'none'
              }}
            >
              <div style={{
                marginBottom: '4px',
                color: role === 'citizen' ? '#dc2626' : '#475569'
              }}>
                <User size={26} strokeWidth={2.4} />
              </div>
              <span style={{
                fontSize: '13px',
                fontWeight: '700',
                color: role === 'citizen' ? '#dc2626' : '#1e293b'
              }}>
                Citizen
              </span>
              <span style={{ fontSize: '10px', color: '#64748b', marginTop: '2px', fontWeight: '500' }}>
                Report & get help
              </span>
            </div>

            {/* Responder Card */}
            <div
              onClick={() => handleRoleChange('responder')}
              style={{
                cursor: 'pointer',
                borderRadius: '16px',
                padding: '14px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                backgroundColor: role === 'responder' ? '#fff1f2' : '#f8fafc',
                border: role === 'responder' ? '1.8px solid #dc2626' : '1.5px solid #e2e8f0',
                boxShadow: role === 'responder' ? '0 4px 12px rgba(220,38,38,0.12)' : 'none'
              }}
            >
              <div style={{
                marginBottom: '4px',
                color: role === 'responder' ? '#dc2626' : '#475569'
              }}>
                <Truck size={26} strokeWidth={2.4} />
              </div>
              <span style={{
                fontSize: '13px',
                fontWeight: '700',
                color: role === 'responder' ? '#dc2626' : '#1e293b'
              }}>
                Responder
              </span>
              <span style={{ fontSize: '10px', color: '#64748b', marginTop: '2px', fontWeight: '500' }}>
                Respond & rescue
              </span>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '4px' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '12.5px',
                  color: '#0f172a',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#dc2626')}
                onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '4px' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '13px',
                  letterSpacing: '2px',
                  color: '#0f172a',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#dc2626')}
                onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-2px' }}>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563eb',
                  fontSize: '11.5px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Forgot password?
              </button>
            </div>

            {/* Main Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '14px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 6px 16px rgba(220, 38, 38, 0.3)',
                  transition: 'transform 0.1s, background-color 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#ffffff',
                  color: '#475569',
                  border: '1.5px dashed #cbd5e1',
                  borderRadius: '14px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
              >
                Continue as Demo User
              </button>
            </div>

            {/* Create Account Footer */}
            <div style={{ textAlign: 'center', marginTop: '4px' }}>
              <p style={{ fontSize: '12px', color: '#64748b' }}>
                New?{' '}
                <button
                  type="button"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2563eb',
                    fontWeight: '700',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Create account
                </button>
              </p>
            </div>
          </form>
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

          {/* iOS Home Indicator Bar */}
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