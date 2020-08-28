import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

class GameCat extends React.Component {
    render() {
        return(
            <div className='categories-select-container'>
                <Select 
                    onChange={this.props.setCat}
                    value={this.props.cat.name}
                    style={{backgroundColor: 'whitesmoke', padding: '5px'}}>
                    <MenuItem value='music'>Music</MenuItem>
                    <MenuItem value='sports'>Sports</MenuItem>
                    <MenuItem value='food'>Food</MenuItem>
                    <MenuItem value='movies'>Movies</MenuItem>
                </Select>
            </div>
        )
    }
}

export default GameCat