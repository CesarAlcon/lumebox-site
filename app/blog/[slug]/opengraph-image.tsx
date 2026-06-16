import { ImageResponse } from 'next/og'
import { getPost, formatDate } from '@/lib/posts'

export const alt         = 'Artigo LumeBox'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)

  return new ImageResponse(
    <div
      style={{
        background:    '#1A1A1A',
        width:         '100%',
        height:        '100%',
        display:       'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        padding:       '64px',
        fontFamily:    'system-ui, sans-serif',
      }}
    >
      {/* Header — LumeBox mark */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div
          style={{
            width: '44px', height: '44px',
            background: '#F9C623',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div style={{ width: '22px', height: '14px', background: 'white', borderRadius: '50%', marginTop: '8px' }} />
        </div>
        <span style={{ color: 'white', fontSize: '26px', fontWeight: '700', letterSpacing: '-0.5px' }}>
          LumeBox
        </span>
      </div>

      {/* Title block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
        <div style={{ width: '56px', height: '4px', background: '#F9C623', borderRadius: '2px' }} />
        <div
          style={{
            color:      'white',
            fontSize:   post && post.title.length > 60 ? '44px' : '52px',
            fontWeight: '700',
            lineHeight: '1.15',
          }}
        >
          {post?.title ?? 'Artigo LumeBox'}
        </div>
        {post && (
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '20px', lineHeight: '1.5', maxWidth: '800px' }}>
            {post.description}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', fontWeight: '600' }}>
            {post?.author.name ?? 'César Alcon'}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '16px' }}>
            {post ? formatDate(post.publishedAt) : ''} · lumebox.com.br/blog
          </span>
        </div>
        <div
          style={{
            background: '#F9C623',
            color: '#1A1A1A',
            fontSize: '15px',
            fontWeight: '700',
            padding: '10px 20px',
            borderRadius: '6px',
          }}
        >
          Ler artigo →
        </div>
      </div>
    </div>,
    { ...size },
  )
}
