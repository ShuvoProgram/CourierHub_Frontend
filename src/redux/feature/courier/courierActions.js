/* eslint-disable no-unused-vars */
import { api } from '../../api/hostApi'

export const getAllCouriers = (accessToken) => {
  return (dispatch) => {
    const url = `${api}/api/couriers/getCouriers`
    fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((res) => {
            dispatch({
              type: 'COURIERS_FETCHED_SUCCESSFULLY',
              payload: res.data,
            })
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: 'COURIERS_FETCH_ERROR',
        })
      })
  }
}
