//Item.js
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Item = ({artistName, title, albumTitle, albumCover, album}) => {
  const coverUrl = `http://localhost:5000/${albumCover}`;
  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <React.Fragment>
          <IconButton edge="end" aria-label="create" style={{margin: 2}}>
            <CreateIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </React.Fragment>
      }>
      <img
        src={coverUrl}
        alt={`${artistName} - ${title}`}
        style={{width: 64, height: 64, marginRight: 16}}
      />
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{ml: 1.5, minWidth: 0}}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {artistName}
          </Typography>
          <Typography noWrap>
            <b>{title}</b>
          </Typography>
          <Typography noWrap letterSpacing={-0.25}>
            {albumTitle}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};
