(()=>{
    let worldReport={
        "dataset": {
            "name":"ARC Website data for all global regions",
            "analytics": [
                {
                    "name": "America ARC Website Analytics Data",
                    "region": "America",
                    "data": [
                        {
                            "date": "2019-10-12",
                            "pageVisits": 23665,
                            "uniqueVistors": 123,
                            "averageTimeSpentPerpageInSeconds": 25,
                            "pageUrl": "https://arc.com/products/finon"
                        },
                        {
                            "date": "2019-10-13",
                            "pageVisits": 54,
                            "averageTimeSpentPerpageInSeconds": 10,
                            "pageUrl": "https://arc.com/products/lerga"
                        },
                        {
                            "date": "2019-10-12",
                            "pageVisits": 542,
                            "averageTimeSpentPerpageInSeconds": 25,
                            "pageUrl": "https://arc.com/products/klaw"
                        },
                        {
                            "date": "2019-10-14",
                            "pageVisits": 321,
                            "uniqueVistors": 11,
                            "averageTimeSpentPerpageInSeconds": 25,
                            "pageUrl": "https://arc.com/products/klaw"
                        },
                        {
                            "date": "2019-10-15",
                            "pageVisits": 764,
                            "uniqueVistors": 21,
                            "pageUrl": "https://arc.com/products/hist"
                        }
                    ]
                },
                {
                    "name": "Europe ARC Website Analytics Data",
                    "region": "Europe",
                    "data": [
                        {
                            "date": "2019-10-12",
                            "pageVisits": 122,
                            "uniqueVistors": 123,
                            "averageTimeSpentPerpageInSeconds": 25,
                            "pageUrl": "https://eu.arc.com/products/finon"
                        },
                        {
                            "date": "2019-10-12",
                            "pageVisits": 7765,
                            "averageTimeSpentPerpageInSeconds": 25,
                            "pageUrl": "https://eu.arc.com/products/lerga"
                        },
                        {
                            "date": "2019-10-12",
                            "pageVisits": 77,
                            "uniqueVistors": 32,
                            "averageTimeSpentPerpageInSeconds": 25,
                            "pageUrl": "https://eu.arc.com/products/klaw"
                        },
                        {
                            "date": "2019-10-12",
                            "pageVisits": 2123,
                            "uniqueVistors": 65,
                            "averageTimeSpentPerpageInSeconds": 25,
                            "pageUrl": "https://eu.arc.com/products/knotw"
                        },
                        {
                            "date": "2019-10-12",
                            "pageVisits": 12,
                            "uniqueVistors": 1,
                            "averageTimeSpentPerpageInSeconds": 2,
                            "pageUrl": "https://eu.arc.com/products/labco"
                        },
                        {
                            "date": "2019-10-12",
                            "pageVisits": 1124,
                            "uniqueVistors": 221,
                            "averageTimeSpentPerpageInSeconds": 2,
                            "pageUrl": "https://eu.arc.com/products/tres"
                        },

                        {
                            "date": "2019-10-14",
                            "pageVisits": 654,
                            "uniqueVistors": 123,
                            "pageUrl": "https://eu.arc.com/products/hist"
                        }

                    ]
                }
            ]
        }
    }


    //Get the total no of region names in the dataset
    let regions=[];
    for(i=0;i<worldReport.dataset.analytics.length;i++){
        regions.push(worldReport.dataset.analytics[i]);
     //   console.log(worldReport.dataset.analytics[i].region);
    }

    const regionList=worldReport.dataset.analytics.map(r=>r.region);
    console.log(regionList);

    }

    )();