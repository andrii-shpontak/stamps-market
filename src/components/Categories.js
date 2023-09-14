import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const faceApi = [
    {
      id: '001',
      name: 'Stamps',
      image:
        'https://ichef.bbci.co.uk/news/976/cpsprodpb/44EE/production/_123064671_hi073439130.jpg',
    },
    {
      id: '002',
      name: 'Envelopes',
      image: 'https://i.etsystatic.com/6534762/r/il/99ba5c/1396589759/il_570xN.1396589759_8t7j.jpg',
    },
    {
      id: '003',
      name: 'Catalogs',
      image: 'https://fory.pro/wp-content/uploads/katalogi-sajtov-dlya-registratsii.jpg',
    },
    {
      id: '004',
      name: 'Accessories',
      image: 'https://images.prom.ua/2120403966_w640_h640_albom-dlya-marok.jpg',
    },
  ];

  return (
    <Stack sx={{ marginTop: '10px' }}>
      <Typography variant="h3" align="center">
        Philately all over the world
      </Typography>
      <Stack>
        {faceApi.map(({ id, name, image }) => {
          return (
            <Link to="#" key={id} style={{ textDecoration: 'none', color: '#3c3c3c' }}>
              <Card sx={{ maxWidth: 345, marginTop: '15px' }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={image} alt={name} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Categories;
