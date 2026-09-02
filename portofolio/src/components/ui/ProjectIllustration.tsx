import React from 'react';
import { ShieldCheck, Activity, CheckCircle2, FileText, Smartphone } from 'lucide-react';

interface ProjectIllustrationProps {
  type: 'financial' | 'iot' | 'crypto' | 'hr' | 'cms';
  title?: string;
}

export const ProjectIllustration: React.FC<ProjectIllustrationProps> = ({ type }) => {
  switch (type) {
    case 'financial':
      return (
        <div style={{
          backgroundColor: 'var(--color-primary-dark)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          color: '#FFFFFF',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1.5px solid rgba(255,255,255,0.12)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Header Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--color-accent)' }}>
                PATENT REG: EC002024205304
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '99px', backgroundColor: 'rgba(207,218,90,0.15)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}>
              KEMENKUMHAM RI
            </span>
          </div>

          {/* Ledger Numbers */}
          <div style={{ margin: '1.25rem 0' }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
              Institutional Ledger Status
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Rp 148.520.000 <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 500 }}>● Balanced</span>
            </div>
          </div>

          {/* Graphical Ledger Matrix */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: 'auto' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>Inflow / SPP</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-accent)' }}>+84.2%</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>Operational</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Audit OK</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>PDF Export</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-accent)' }}>Auto-Sign</div>
            </div>
          </div>
        </div>
      );

    case 'iot':
      return (
        <div style={{
          backgroundColor: 'var(--color-surface-cream)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          color: 'var(--color-primary-dark)',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1.5px solid var(--color-border)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={16} color="var(--color-primary)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                TELEMETRY LIVE NODE #04
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '99px', backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
              ONLINE (SYNC 2s)
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', margin: '1rem 0' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Water pH Level</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)' }}>6.8 <span style={{ fontSize: '0.75rem', color: '#3B82F6' }}>Optimal</span></div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Electrical Cond.</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)' }}>1.85 <span style={{ fontSize: '0.75rem', color: '#10B981' }}>mS/cm</span></div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="var(--color-accent)" /> Admin Task: Fertilizer Dispense
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)' }}>Proof Verified</span>
          </div>
        </div>
      );

    case 'crypto':
      return (
        <div style={{
          backgroundColor: 'var(--color-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          color: '#FFFFFF',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1.5px solid rgba(255,255,255,0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--color-accent)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                NATIVE DART AES-256 CBC
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '99px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF' }}>
              CLIENT DECRYPT
            </span>
          </div>

          <div style={{ margin: '1rem 0', padding: '0.85rem', backgroundColor: 'var(--color-primary-dark)', borderRadius: 'var(--radius-sm)', border: '1px dashed rgba(207,218,90,0.4)' }}>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', marginBottom: '0.3rem' }}>
              ENCRYPTED PAYLOAD BUFFER:
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', wordBreak: 'break-all', opacity: 0.9 }}>
              U2FsdGVkX19zK9u5m3W+9p4qL8xZ0q1eA2v4... [DECRYPTED ON DEVICE]
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.08)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Smartphone size={15} color="var(--color-accent)" /> SPP Tuition Mobile Invoice
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>Verified Match</span>
          </div>
        </div>
      );

    case 'hr':
      return (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          color: 'var(--color-primary-dark)',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1.5px solid var(--color-border)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.85rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)' }}>
              INTERNAL HR & PTO MONITOR
            </span>
            <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '99px', backgroundColor: 'var(--color-primary)', color: '#FFFFFF', fontWeight: 600 }}>
              ACTIVE PERMIT QUEUE
            </span>
          </div>

          <div style={{ margin: '1rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>Annual Leave Balance</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>9 / 12 Days Remaining</span>
            </div>
            <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-surface-tint)', borderRadius: '99px', overflow: 'hidden' }}>
              <div style={{ width: '75%', height: '100%', backgroundColor: 'var(--color-accent-dark)' }}></div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            <div style={{ backgroundColor: 'var(--color-surface-cream)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Pending Approvals</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>02 Requests</div>
            </div>
            <div style={{ backgroundColor: 'var(--color-surface-cream)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Late Check-in Log</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#10B981' }}>00 Issues</div>
            </div>
          </div>
        </div>
      );

    case 'cms':
    default:
      return (
        <div style={{
          backgroundColor: 'var(--color-primary-dark)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          color: '#FFFFFF',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1.5px solid rgba(255,255,255,0.12)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={16} color="var(--color-accent)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                EDITORIAL CMS HUB & PUBLISHING
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '99px', backgroundColor: 'rgba(207,218,90,0.15)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}>
              LARAVEL REST BACKEND
            </span>
          </div>

          <div style={{ margin: '1rem 0' }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Content Publishing Pipeline
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: '#FFFFFF' }}>
              Press Releases & Publication Repository
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.08)', fontSize: '0.75rem', color: 'var(--color-accent)' }}>
              ✓ Multi-role Auth
            </span>
            <span style={{ padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.08)', fontSize: '0.75rem', color: '#FFFFFF' }}>
              ✓ Structured Media
            </span>
            <span style={{ padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255,255,255,0.08)', fontSize: '0.75rem', color: 'var(--color-accent)' }}>
              ✓ Document Search
            </span>
          </div>
        </div>
      );
  }
};
