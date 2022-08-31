import React from 'react'
import { VictoryPie, VictoryBar, VictoryChart } from 'victory'
import { GraphsStyle, ViewStyle } from './style'

const StatsGraph = ({data}) => {
    const [graph, setGraph] = React.useState([])
    const [view, setView] = React.useState(0)

    React.useEffect(() => {
        const graphData = data.map(item => {
            return{
                x: item.title,
                y: Number(item.acessos),
            }
        })
        setView(data.map(({views}) => Number(views)).reduce((a, b) => a + b))
        setGraph(graphData)
    }, [data])

    return (
        <GraphsStyle>
            <ViewStyle>
                <p>Views: {view}</p>
            </ViewStyle>
            <div>
                <VictoryPie 
                    data={graph} 
                    innerRadius={50} 
                    padding={{top: 20, bottom: 20, left: 80, right: 80}} 
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke: '#fff',
                            strokeWidth: 2,
                        },
                        labels: {
                            fontSize: 14,
                            fill: '#333',
                        },
                    }}
                />
            </div>
            <div>
                <VictoryChart>
                    <VictoryBar alignment='start' data={graph}></VictoryBar>
                </VictoryChart>
            </div>
        </GraphsStyle>
    )
}

export default StatsGraph