import React from 'react';

import { FormLabel, TextField, Button, Typography } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { toast } from 'react-toastify';

import { ReactComponent as LocationIcon } from '../../../../assets/icons/location.svg';
import { LocationStepStyles } from './LocationStep.style';
import LocationStepInfo from './LocationStepInfo';

function getStreetΝumber(address) {
  return address.find((item) => item.types.includes('street_number'))?.long_name;
}
function getPostalCode(address) {
  return address.find((item) => item.types.includes('postal_code'))?.long_name;
}
function getStreet(address) {
  return address.find((item) => item.types.includes('route'))?.long_name;
}
function getRegion(address) {
  return address.find((item) => item.types.includes('locality'))?.long_name;
}

function LocationStep({ nextStep, previousStep, updateForm, editProps }) {
  const [formState, setFormState] = React.useState(
    Object.keys(editProps).length
      ? {
          street: editProps.street,
          number: editProps.number,
          region: editProps.region,
          postalCode: editProps.postalCode,
          lattitude: editProps.latitude,
          longitude: editProps.longitude,
        }
      : undefined,
  );
  const [address, setAddress] = React.useState('');
  const [error, setError] = React.useState(false);

  function fillAdress(adrs, latLng) {
    const state = {
      street: getStreet(adrs),
      number: getStreetΝumber(adrs),
      region: getRegion(adrs),
      postalCode: getPostalCode(adrs),
      lattitude: latLng.lat,
      longitude: latLng.lng,
    };
    setFormState(state);
  }

  function handleGeoChange(adrs) {
    setFormState(undefined);
    setError(false);
    setAddress(adrs);
  }

  function handleSelect(adrs) {
    setAddress('');
    let adressComponents;
    geocodeByAddress(adrs)
      .then((results) => {
        adressComponents = results[0].address_components;
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        fillAdress(adressComponents, latLng);
      });
    // .catch((err) => console.error('Error', err));
  }

  function isValid() {
    console.log(formState);
    if (!formState) {
      setError(true);
      return false;
    }
    const keys = Object.keys(formState);

    const completedKeys = keys.filter((key) => {
      if (formState[key].length > 0 || key === 'longitude' || key === 'lattitude') return key;
      else return null;
    });
    if (completedKeys.length !== keys.length) {
      setError(true);
      return false;
    }
    return true;
  }
  function handleNext() {
    const valid = isValid();
    if (valid) {
      updateForm(formState);
      nextStep();
    } else {
      toast.error('Συμπλήρωσε όλα τα πεδία');
    }
  }
  function handlePrevious() {
    updateForm(formState);
    previousStep();
  }

  const classes = LocationStepStyles();

  return (
    <div className={classes.container}>
      <PlacesAutocomplete
        searchOptions={{ types: ['address'] }}
        value={address}
        onChange={handleGeoChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <FormLabel className={classes.selectLabel} component='legend'>
              Βρες την διεύθυνηση σου
            </FormLabel>
            <TextField
              // eslint-disable-next-line
              {...getInputProps({
                placeholder: 'Οδός Νούμερο, Περιοχή',
                size: 'small',
                variant: 'outlined',
                className: classes.input,
                error,
              })}
            />
            <div className={classes.dropdown}>
              {/* {loading && <div>Loading...</div>} */}
              {suggestions.map((suggestion) => {
                const className = classes.dropdownItem;
                const style = suggestion.active
                  ? { backgroundColor: '#d9d8dd', cursor: 'pointer' }
                  : { backgroundColor: '#FAFAFA', cursor: 'pointer' };
                return (
                  <div
                    key={suggestion}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <LocationIcon className={classes.locationSvg} />
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {formState && (
        <>
          <Typography color='secondary' className={classes.infoLabel}>
            Η επιλογή σου
          </Typography>
          <div className={classes.infoContainer}>
            <LocationStepInfo label='Περιοχή' content={formState.region} />
            <LocationStepInfo label='Οδός' content={formState.street} />
            <LocationStepInfo label='Νούμερο' content={formState.number} />
            <LocationStepInfo label='T.K' content={formState.postalCode} />
          </div>
        </>
      )}
      <div style={{ marginLeft: 'auto' }}>
        <Button
          style={{ marginRight: 5 }}
          onClick={handlePrevious}
          className={classes.button}
          size='large'
          color='primary'
          variant='text'
          startIcon={<NavigateBeforeIcon />}
        >
          ΠΡΟΗΓΟΥΜΕΝΟ
        </Button>
        <Button
          onClick={handleNext}
          className={classes.button}
          size='large'
          color='primary'
          variant='contained'
          endIcon={<NavigateNextIcon />}
        >
          ΕΠΟΜΕΝΟ
        </Button>
      </div>
    </div>
  );
}

export default LocationStep;
