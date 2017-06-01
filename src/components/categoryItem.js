import React from 'react';

const CategoryItem = React.createClass({

    getInitialState() {
        return ({
            selected: false,
            mouseOver: false,
        })
    },

    itemClicked() {
        this.setState({
            selected: !this.state.selected,
        })
    },

    mouseOver() {
        this.setState({
            mouseOver: true,
        })
    },

    mouseOut() {
        this.setState({
            mouseOver: false,
        })
    },


    render() {
        const styles = {
            menuItem: {
                display: 'flex',
                width: '33.3%',
                minWidth: '180px',
                height: '200px',
                backgroundColor: this.state.selected ? '#EB9321' : (this.state.mouseOver ? 'lightgrey' : 'white'),
                border: '2px solid #E0E0E0',
                boxSizing: 'border-box',
                flexGrow: 1,
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 0.3s ease-in-out',
            },
            menuTitle: {
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '16px',
            },
            icon: {
                width: this.state.mouseOver ? '120px' : '100px',
                transition: 'all 0.3s ease-in-out',
            }
        }

        return (
            <div style={styles.menuItem} onClick={this.itemClicked} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} >
                <img style={styles.icon} src={process.env.PUBLIC_URL + '/img/' + this.props.icon + ".svg"} alt="" />
                <span style={styles.menuTitle} >{this.props.name}</span>
            </div>
        );
    }
})

export default CategoryItem;
