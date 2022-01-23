import { Accordion, AccordionDetails, AccordionSummary, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filter = (props) => {
    const changeHandler = (e) =>{
        console.log(e.target.value);
        console.log(e.target.name);
        props.filter(e.target.name,e.target.value)
    }

    return (
    <Container x={{display: "inline-flex", color: '#fff', overflow: 'hidden'}}>
        <Typography variant="h2" component="h2" sx={{ color: '#fff', pt:5}}>
           Filter
            </Typography>
      <Accordion sx={{backgroundColor: "#000", color: '#fff'}}>
        <AccordionSummary   expandIcon={<ExpandMoreIcon sx={{ fill: '#fff'}} />} aria-controls="panel1a-content" id="panel1a-header" >
          <Typography>Пол</Typography>
        </AccordionSummary>
        <AccordionDetails>
                <FormControl sx={{backgroundColor: "#000", color: '#fff'}}>
                    <RadioGroup onChange={changeHandler}  row aria-labelledby="demo-row-radio-buttons-group-label" name="gender" >
                        <FormControlLabel value="Female" data-status='status'  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Female" />
                        <FormControlLabel value="Male"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Male" />
                        <FormControlLabel value="Genderless"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Genderless" />
                        <FormControlLabel value="unknown"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="unknown" />
                        <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>}
                        label="other"
                        />
                    </RadioGroup>
                </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "#000", color: '#fff'}}>
        <AccordionSummary   expandIcon={<ExpandMoreIcon sx={{ fill: '#fff'}} />} aria-controls="panel1a-content" id="panel1a-header" >
          <Typography>Состояние (умер\живой)</Typography>
        </AccordionSummary>
        <AccordionDetails>
                <FormControl sx={{backgroundColor: "#000", color: '#fff'}}>
                    <RadioGroup onChange={changeHandler}  row aria-labelledby="demo-row-radio-buttons-group-label" name="status" >
                        <FormControlLabel value="alive" data-status='status'  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="alive" />
                        <FormControlLabel value="dead"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="dead" />
                        <FormControlLabel value="unknown"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="unknown" />
                        <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>}
                        label="other"
                        />
                    </RadioGroup>
                </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "#000", color: '#fff'}}>
        <AccordionSummary   expandIcon={<ExpandMoreIcon sx={{ fill: '#fff'}} />} aria-controls="panel1a-content" id="panel1a-header" >
          <Typography>Раса</Typography>
        </AccordionSummary>
        <AccordionDetails>
                <FormControl sx={{backgroundColor: "#000", color: '#fff'}}>
                    <RadioGroup onChange={changeHandler}  row aria-labelledby="demo-row-radio-buttons-group-label" name="species" >
                        <FormControlLabel value="Alien" data-status='status'  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Alien" />
                        <FormControlLabel value="Human"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Human" />
                        <FormControlLabel value="Humanoid "  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Humanoid " />
                        <FormControlLabel value="Mythological Creature"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Mythological Creature" />
                        <FormControlLabel value="Robot"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Robot" />
                        <FormControlLabel value="Animal"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Animal" />
                        <FormControlLabel value="Disease"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Disease" />
                        <FormControlLabel value="Cronenberg"  control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>} label="Cronenberg" />
                        <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio sx={{margin:"0 10px", color: '#fff'}}/>}
                        label="other"
                        />
                    </RadioGroup>
                </FormControl>
        </AccordionDetails>
      </Accordion>
     
      
    </Container>
  );
};

export default Filter;
