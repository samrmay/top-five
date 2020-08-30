import React from 'react'
// @material-UI COre was used for Menu/select options, crashed with hook error
class GameCat extends React.Component {
    componentDidMount () {
    }
    render() {
        let catsOptionsMenu = <option value='empty'>Loading...</option>
        if (this.props.catsOptions) {
            catsOptionsMenu = this.props.catsOptions.map((option, index) => {return <option value={index} key={option._id}>{option.name}</ option>})
        }
        return(
            <div className='categories-select-container'>
                <select
                    onChange={this.props.setCat}
                    value={this.props.catsOptions.findIndex((item) => item.name === this.props.cat.name)}
                    style={{backgroundColor: 'whitesmoke', padding: '5px'}}>
                        <option value=''>Select a Category</option>
                        {catsOptionsMenu}
                </select>
            </div>
        )
    }
}

export default GameCat