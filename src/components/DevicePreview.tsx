// DevicePreview.tsx
import { useState } from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import type { DeviceType } from './devices'

type Props = {
	url: string
}

export function DevicePreview({ url }: Props) {
	const [device, setDevice] = useState<DeviceType>('Galaxy Note 8')
	const [landscape, setLandscape] = useState(false)

	return (
		<div style={{ display: 'flex', gap: 24 }}>
			{/* Preview */}
			<DeviceFrameset device={device} color='black' landscape={landscape}>
				<iframe
					src={url}
					style={{
						width: '100%',
						height: '100%',
						border: 'none',
					}}
				/>
			</DeviceFrameset>

			{/* Controls */}
			<div style={{ minWidth: 220 }}>
				<select
					value={device}
					onChange={e => setDevice(e.target.value as DeviceType)}
				>
					<option>iPhone X</option>
					<option>iPhone 8</option>
					<option>iPhone 8 Plus</option>
					<option>Galaxy Note 8</option>
					<option>Nexus 5</option>
					<option>iPad Mini</option>
					<option>MacBook Pro</option>
				</select>

				<br />
				<br />

				<button onClick={() => setLandscape(v => !v)}>
					{landscape ? 'Portrait' : 'Landscape'}
				</button>
			</div>
		</div>
	)
}
