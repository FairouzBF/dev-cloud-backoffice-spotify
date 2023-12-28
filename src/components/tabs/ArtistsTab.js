// ArtistsTab.js
import React, {useState, useEffect} from 'react';
import {ItemsList} from '../ArtistsList';
import {fetchArtists} from '../../services/api/artistApi';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ArtistsTab = () => {
  const [artists, setArtists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    // Fetch songs when the component mounts
    const fetchData = async () => {
      try {
        const artists = await fetchArtists();
        setArtists(artists);
        console.log(artists);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setDeleted(false);
  };

  const handleDelete = async () => {
    try {
      const updatedArtists = await fetchArtists();
      setArtists(updatedArtists);
      setDeleted(true);
    } catch (error) {
      console.error('Error fetching updated songs:', error);
    }
  };

  return (
    <div>
      <h2>Artistes</h2>
      <ItemsList
        items={artists}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onDelete={handleDelete}
      />
      <Snackbar
        open={deleted}
        autoHideDuration={6000}
        onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{width: '100%'}}>
          Artist deleted successfully.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ArtistsTab;
