// albumApi.js
import {get, BASE_URL, handleResponse} from './apiProxy';

export const fetchAlbums = async () => {
  try {
    const response = await get('/album');
    return response;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};

export const fetchAlbumById = async albumId => {
  try {
    const response = await get(`/album/${albumId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching album with ID ${albumId}:`, error);
    throw error;
  }
};

export const deleteAlbum = async id => {
  try {
    const authTokenCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='));
    const authToken = authTokenCookie ? authTokenCookie.split('=')[1] : null;

    const response = await fetch(`${BASE_URL}/album/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken ? authToken : '',
      },
      credentials: 'include',
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error deleting album:', error);
    throw error;
  }
};
