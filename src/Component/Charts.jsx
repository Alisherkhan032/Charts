import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const App = () => {
    return ( 
        <div className="w-[500px] h-[400px] flex flex-wrap">
            <div className="flex w-[45vw]">
            <Bar 
                data={{
                    labels : ["Mon","Tues","Wed","Thurs","Fri","Sat"],
                    datasets : [
                        {
                            label : "Attendance",
                            data : [45,50,12,18,24,54],
                            borderColor : "black",
                            borderWidth : 2,
                            backgroundColor : ["skyblue", "lightgreen", "pink", "yellow"],
                            borderRadius : 6
                        }
                    ]
                }}

                options={{
                    scales :{
                        y :{
                            max : 70,
                            title : {
                                display : true,
                                text : "Students",
                                font : {
                                    size : 15,
                                    weight : "bold",
                                }
                            }
                        }
                    },
                    plugins : {
                        title : {
                            display : true,
                            text : "Bar Chart"
                        }
                    }
                }}
            />
            <Line 
                data={{
                    labels : ["Mon","Tues","Wed","Thurs","Fri","Sat"],
                    datasets : [
                        {
                            label : "Attendance",
                            data : [45,50,12,18,24,54],
                            borderColor : "black",
                            borderWidth : 2,
                            backgroundColor : ["skyblue", "lightgreen", "pink", "yellow"],
                            borderRadius : 6
                        }
                    ]
                }}

                options={{
                    scales :{
                        y :{
                            max : 70,
                            title : {
                                display : true,
                                text : "Students",
                                font : {
                                    size : 15,
                                    weight : "bold",
                                }
                            }
                        }
                    },
                    plugins : {
                        title : {
                            display : true,
                            text : "Line Chart"
                        }
                    }
                }}
            />
            </div>
            <Doughnut 
                data={{
                    labels : ["Mon","Tues","Wed","Thurs","Fri","Sat"],
                    datasets : [
                        {
                            label : "Attendance",
                            data : [45,50,12,18,24,54],
                            borderColor : "black",
                            borderWidth : 2,
                            backgroundColor : ["skyblue", "lightgreen", "pink", "yellow"],
                            borderRadius : 6
                        }
                    ]
                }}

                options={{

                    plugins : {
                        title : {
                            display : true,
                            text : "Doughnut Chart"
                        }
                    }
                }}
            />
        </div>
     );
}
 
export default App;