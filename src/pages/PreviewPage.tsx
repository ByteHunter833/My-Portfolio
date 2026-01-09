// PreviewPage.tsx
import { DevicePreview } from '@/components/DevicePreview'
import { useSearchParams } from 'react-router-dom'

export function PreviewPage() {
	const [params] = useSearchParams()
	const src = params.get('src')

	return (
		<div style={{ padding: 24 }}>
			<DevicePreview url={src} />
		</div>
	)
}
