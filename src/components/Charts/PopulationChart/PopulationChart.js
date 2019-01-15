import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import './PopulationChart.css';

// Colors for chart bars.
const COLORS = [
    '#364b69',
    '#5a567d',
    '#835e89',
    '#ac668a',
    '#ce7382',
    '#e58674',
    '#eea167',
    '#ffb755',
    '#ffd13e',
    '#ffe926',
]

export default class PopulationChart extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // List of municipality names.
            municipalities: [],
            // List of municipality populations.
            populations: []
        }
    }

    // Iterates through chartData-prop when component is mounted.
    // Creates lists of municipality names and populations,
    // These lists are then set as states.
    componentDidMount() {
        let muniNames = [];
        let muniPopulations = [];

        this.props.chartData.map((muni, i) => {
            muniNames[i] = muni.name;
            muniPopulations[i] = muni.population;
            return null;
        })

        this.setState({ municipalities: muniNames, populations: muniPopulations })
    }

    // Render the municipality chart and fill it with state data. 
    render() {
        return (
            <div className="population-chart">
                <HorizontalBar 
                    data={{
                        labels: this.state.municipalities,
                        datasets: [
                            {
                                label: 'Population',
                                data: this.state.populations,
                                backgroundColor: COLORS
                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 0,
                            }
                        }
                    }}
                    height={600}
                />
            </div>
        );
    }
}