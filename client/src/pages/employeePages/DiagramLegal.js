import React, {useContext, useEffect, useState} from 'react';
import Chart from "./Chart";
import {fetchAppeals} from "../../http/AppealApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";


const DiagramLegal = observer(() => {
    const {appeal} = useContext(Context)

    useEffect(() => {

        fetchAppeals('true',null, null, null,
            9,1).then(data => {
                appeal.setAppeals(data.rows)
                appeal.setTotalCount(data.count)
            }
        )
    },[])


    const stringOrder = []
    for (let i = 0; i < appeal.appeals.length; i++) {
        stringOrder[i] = appeal.appeals[i].organization_address.organization_name
    }


    var result = {};
    stringOrder.forEach(function (a) {
        result[a] = result[a] + 1 || 1;
    });

    var j = 0
    var Names = []
    var counts = []
    for (var key in result){
        Names[j] = key
        counts[j] = result[key]
        j++
    }



    const [pieDate, setPieDate] = useState({
        labels: Names,
        datasets: [{
            label: 'gained',
            data: counts,
            backgroundColor:  [
                'rgba(250,0,0,0.2)',
                'rgba(55,255,0,0.2)',
                'rgba(84,0,82,0.2)',
                'rgba(231,238,5,0.2)',
                'rgba(7,203,248,0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgb(79,203,11)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    });




    return (
      <Container>
          <div className='d-flex justify-content-center align-items-center mt-5 flex-wrap'>
              <div className='mb-3' style={{width: '900px'}}>
                  <Chart chartDate={pieDate}/>
              </div>
              <h3>Статистика по областям юридических лиц</h3>
          </div>
      </Container>
    );
});

export default DiagramLegal;