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
import Restaurant from './pages/Restaurant'
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
        const AboutPage = () => {
            return(
              <About
                workers={this.props.workers}
                isLoading={this.props.workers.isLoading}
                errMess={this.props.workers.errMess}
              />
            );
        }

        const RestaurantPage = () => {
            return(
              <Restaurant
                dishes={this.props.dishes}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
              />
            );
        }
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/restaurant" component={RestaurantPage} />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));