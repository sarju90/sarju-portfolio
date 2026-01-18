import { ImageResponse } from 'next/og'
import { personalInfo } from '@/data/portfolio-data'

export const runtime = 'edge'

export const alt = 'Sarju Dharsandiya Portfolio'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
                    color: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    padding: '40px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 900,
                            backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: 20,
                            display: 'flex' // Satori quirk: text gradient sometimes needs flex or specific display
                        }}
                    >
                        {personalInfo.name}
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: '#d1d5db',
                            marginBottom: 40,
                        }}
                    >
                        {personalInfo.title}
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            color: '#9ca3af',
                            textAlign: 'center',
                            maxWidth: '800px',
                        }}
                    >
                        {personalInfo.tagline}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
