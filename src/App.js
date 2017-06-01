import React from 'react';
import CategoryList from './components/categoryList';

const NewTask = React.createClass({

    getInitialState() {
        return ({
            date: this.getDateFormatted(),
            time: this.getCurrentTime()
        });
    },

    getDateFormatted() {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var d = new Date();
        var dayName = days[d.getDay()];
        return dayName + ', ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
    },

    getCurrentTime() {
        var d = new Date();
        return ('0' + d.getHours()).slice(-2) + '.' + ('0' + d.getMinutes()).slice(-2);
    },

    handleDate(event) {
        this.setState({date: event.target.value})
    },

    handleTime(event) {
        this.setState({time: event.target.value})
    },

    //class NewTask extends React.Component {
    render() {
        const styles = {
            wrapper: {
                padding: '30px',
                maxWidth: '600px',
                margin: '0 auto',
            },
            section: {
                backgroundColor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'center',
                padding: '40px 10px',
                flex: '1',
                borderTop: '2px solid #E0E0E0',
                fontSize: '120%',
            },
            textFieldContainer: {
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'flex-start',
                padding: '40px 64px',
                flex: '1',
                borderTop: '2px solid #E0E0E0',
                flexDirection: 'column',
            },
            caption: {
                color: 'grey',
                fontSize: '120%',
                margin: '8px 0px',
            },
            input: {
                fontSize: '140%',
                border: 'none',
                borderBottom: '2px solid black',
                marginBottom: '32px',
            }
        }

        return (<div style={styles.wrapper} >
            <div style={styles.section} >
                <span > Välj kategori </span>
            </div>

            <CategoryList />

            <div style={styles.section} >
                <span> Uppdragsinformation </span>
            </div>

            <div style={styles.textFieldContainer} >
                <span style={styles.caption} > Datum </span>
                <input style={styles.input}
                    type="text"
                    value={this.state.date}
                    onChange={this.handleDate} />
                <span style={styles.caption} > Tid </span>
                <input style={styles.input}
                    type="text"
                    value={this.state.time} 
                    onChange={this.handleTime} />
            </div>
        </div >
        )
    }
});

export default NewTask;