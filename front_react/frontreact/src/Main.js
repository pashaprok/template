import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'; 

//import states
import { fetchDishes } from './redux/dishesActions';
import { fetchRooms } from './redux/roomsActions';
import { fetchWorkers } from './redux/workersActions';
import { connect } from 'react-redux';

// import pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Header from './pages/Header'
import Footer from './pages/Footer'

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      rooms: state.rooms,
      workers: state.workers
    };   
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => { dispatch(fetchDishes())},
    fetchRooms: () => { dispatch(fetchRooms())},
    fetchWorkers: () => dispatch(fetchWorkers())
});

class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchRooms();
        this.props.fetchWorkers();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));