import { API_URL } from '../config';
import styles from '../styles/movie-videos.module.css';

const getVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`)
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <div className={styles.container}>
    {videos.map((video) => (
      <iframe key={video.id} src={`http://youtube.com/embed/${video.key}`}
        allowFullScreen
        title={video.name} />

    ))}
  </div>
}