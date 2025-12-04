import Editor from '@/components/Editor'
import { use } from 'react'

export default function RoomPage({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = use(params)
  return <Editor roomId={roomId} />
}
