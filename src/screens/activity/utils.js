import moment from 'moment';

export function formatDuration(duration) {
  return (duration) ? moment.utc(duration * 1000).format("HH:mm:ss") : '';
}

export function formatDistance(distance) {
  return (distance) ? `${distance / 1000}km` : '';
}

export function formatDate(date) {
  return moment(date).format('YYYY-MM-DD')
}
