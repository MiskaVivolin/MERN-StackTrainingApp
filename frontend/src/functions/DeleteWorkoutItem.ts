import axios, { AxiosResponse } from 'axios'
import { SetWorkoutList, WorkoutItem, ResponseData } from '../types/Types'

const DeleteResultItem = (workoutItem: WorkoutItem, setWorkoutList: SetWorkoutList): void => {

  axios.delete<ResponseData>('http://127.0.0.1:3001/delete', {params: { id: workoutItem._id }})
  .then((response: AxiosResponse<ResponseData>) => {
    if(response.data.message.toLowerCase().includes('error')) {
        alert(response.data.message)
      } else {
        console.log(response.data.message)
        setWorkoutList((prevList) => prevList.filter((prevItem) => prevItem._id !== workoutItem._id));
    }
  })
  .catch((error) => {
    console.error('Error sending delete request:', error);
  });
}

export default DeleteResultItem;