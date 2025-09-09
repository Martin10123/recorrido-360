import insideOne from '../images/PuenteDeGobierno.jpg'
import insideTwo from '../images/CubiertaBoteCrujiaProa.jpg'
import insideThree from '../images/CubiertaBoteCrujiaProaBabor.jpg'; 
import insideFour from '../images/ProaCostadoBabor.jpg'; 
import insideFive from '../images/ProaCostadoEstribor.jpg'; 
import insideSix from '../images/CubiertaPrincipalCostadoBabor.jpg'; 
import insideSeven from '../images/CubiertaPrincipalCostadoEstribor.jpg'; 
import insideEight from '../images/CubiertaDeTrabajo.jpg'; 
import insideNine from '../images/CabrestanteCostadoBabor.jpg'; 
import insideTen from '../images/CabrestanteCostadoEstribor.jpg'; 
import insideEleven from '../images/CubiertaBoteCostadoBaborProa.jpg';
import insideTwelve from '../images/CubiertaBoteCostadoBabor.jpg';
import insideThirteen from '../images/CuartoMaquinasCostadoBaborPopa.jpg';
import insideFourteen from '../images/CuartoMaquinasCostadoBaborProa.jpg';
import insideFifteen from '../images/CubiertaSuperiorCuartoMaquinas.jpg';
import insideSixteen from '../images/CuartoMaquinasCostadoEstribor.jpg';
import insideSeventeen from '../images/ServoMotorCrujia.jpg';
import insideEighteen from '../images/ServoMotorCostadoBabor.jpg';
import insideNineteen from '../images/ServoMotorCostadoEstribor.jpg';


const Scene = {
    
    insideOne:{
        title:'Puente De Gobierno',
        image: insideOne,
        pitch: -1.22,
        yaw: 1.17,
        
        hotSpots:{
            caja1:{
                type: 'custom',
                pitch: 18.28,
                yaw: 40.12,
                cssClass: 'hotSpotElement',

            },
            caja2:{
                type: 'custom',
                pitch: 25.77,
                yaw: 159.30,
                cssClass: 'hotSpotElement',           
            },
            cajaroja:{
                type: 'custom',
                pitch: 26.05,
                yaw: 98.77,
                cssClass: 'hotSpotElement',
                 previewImage: insideTwo,
            },

            nextScene:{
                type: 'custom',
                pitch: -14.6,
                yaw: 0.5,
                cssClass: 'moveScene',
                scene: 'insideTwo',
                previewImage: insideTwo,       
                label: 'Ir a Cubierta Bote Crujia Proa'
            },

            nextScene1:{
                type: 'custom',
                pitch: -9.46,
                yaw: 179.2,
                cssClass: 'moveScene',
                scene: 'insideThree',
                previewImage: insideThree,       
                label: 'Ir a Cubierta Bote Crujia Proa Babor'
            }
            
        }
    },

        insideTwo:{
        title:'Cubierta Bote_Crujia Proa',
        image: insideTwo,
        pitch: -0.85,
        yaw: -8.3,
        hotSpots:{

            nextScene:{
                type: 'custom',
                pitch: -31.3,
                yaw: 29.4,
                cssClass: 'moveScene',
                scene: 'insideFive',
                previewImage: insideSix,       
                label: 'Ir a Cubierta Bote Crujia Proa Babor'
            },
            
            nextScene1:{
                type: 'custom',
                pitch: -29.3,
                yaw: -59.9,
                cssClass: 'moveScene',
                scene: 'insideFour'
            },
            nextScene2:{
                type: 'custom',
                pitch:  11.96,
                yaw: -178.1,
                cssClass: 'moveScene',
                scene: 'insideOne'
            },
                nextScene3:{
                type: 'custom',
                pitch:  -6.95,
                yaw: -150,
                cssClass: 'moveScene',
                scene: 'insideEleven'
            }
        }
    },

    insideThree: {
  title: 'Cubierta Bote_crujia Proa_Babor',
  image: insideThree,
  pitch: -8.70,
  yaw: -173,
  hotSpots: {
   
    nextScene: {
      type: 'custom',
      pitch: 5.0,
      yaw: 30.0,
      cssClass: 'moveScene',
      scene: 'insideOne', 
      previewImage: insideOne,       
      label: 'Ir al costado babor'
     },
    
      nextScene1: {
      type: 'custom',
      pitch: -28.79,
      yaw: 179,
      cssClass: 'moveScene',
      scene: 'insideEight', 
     },

    nextScene2: {
      type: 'custom',
      pitch:  -48.5,
      yaw:136,
      cssClass: 'moveScene',
      scene: 'insideTen', 
     },

    nextScene3: {
      type: 'custom',
      pitch:  -43.1,
      yaw:-135,
      cssClass: 'moveScene',
      scene: 'insideTwelve', 
     },
     
   }
 },

     insideFour:{
        title:'Proa Costado Babor',
        image: insideFour,
        pitch: 18.30,
        yaw: 40.12,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 25.5,
                yaw: 141.7,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            },
            
            nextScene1:{
                type: 'custom',
                pitch: -0.61,
                yaw: 105.9,
                cssClass: 'moveScene',
                scene: 'insideFive'
            },
            
            nextScene2:{
                type: 'custom',
                pitch: -8.13,
                yaw: -138.0,
                cssClass: 'moveScene',
                scene: 'insideSeven'
            }
            
        }
    },

         insideFive:{
        title:'Proa Costado Estribor',
        image: insideFive,
        pitch: 17.7,
        yaw:  10.1,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 22.4,
                yaw: -129,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            },
            
            nextScene1:{
                type: 'custom',
                pitch: -3.81,
                yaw: -89.0,
                cssClass: 'moveScene',
                scene: 'insideFour'
            },
            
            nextScene2:{
                type: 'custom',
                pitch:  -10.0,
                yaw: 155.5,
                cssClass: 'moveScene',
                scene: 'insideSix'
            }
            
        }
    },
    
         insideSix:{
        title:'Cubierta Principal Costado Babor',
        image: insideSix,
        pitch: 2.34,
        yaw: -0.25,
        hotSpots:{
            
            nextScene1:{
                type: 'custom',
                pitch: -0.08,
                yaw: 163,
                cssClass: 'moveScene',
                scene: 'insideFive'
            }
            
        }
    },

             insideSeven:{
        title:'Cubierta Principal Costado Estribor',
        image: insideSeven,
        pitch: 9.42,
        yaw: 14.33,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 0.65,
                yaw: -164.2,
                cssClass: 'moveScene',
                scene: 'insideFour'
            }  
        }
    },

              insideEight:{
        title:'Cubierta De Trabajo',
        image: insideEight,
        pitch:11.70,
        yaw: 156,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 27.6,
                yaw: 176,
                cssClass: 'moveScene',
                scene: 'insideThree'
            },
                        nextScene1:{
                type: 'custom',
                pitch:7.60,
                yaw: -167,
                cssClass: 'moveScene',
                scene: 'insideTen'
            } ,
                        nextScene2:{
                type: 'custom',
                pitch: 7.22,
                yaw: 164,
                cssClass: 'moveScene',
                scene: 'insideNine'
            } ,
                        nextScene3:{
                type: 'custom',
                pitch:19.33,
                yaw: 161,
                cssClass: 'moveScene',
                scene: 'insideTwelve'
            }, 
                        nextScene4:{
                type: 'custom',
                pitch: 4.82,
                yaw: 81.9,
                cssClass: 'moveScene',
                scene: 'insideThirteen'
            } 
        }
    },

                  insideNine:{
        title:'Cabrestante Costado Babor',
        image: insideNine,
        pitch:3.09,
        yaw:71.0,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 1.02,
                yaw: -10.7,
                cssClass: 'moveScene',
                scene: 'insideTen'
            }  ,

                        nextScene1:{
                type: 'custom',
                pitch: 1.45,
                yaw: 96.6,
                cssClass: 'moveScene',
                scene: 'insideEight'
            } ,
            
                        nextScene2:{
                type: 'custom',
                pitch: 59.53,
                yaw: -53.8,
                cssClass: 'moveScene',
                scene: 'insideThree'
            }  
            
        }
    },

                  insideTen:{
        title:'Cabrestante Costado Estribor',
        image: insideTen,
        pitch:4.97,
        yaw: -111,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 48.7,
                yaw:57.4,
                cssClass: 'moveScene',
                scene: 'insideThree'
            },  
                        
            nextScene1:{
                type: 'custom',
                pitch: -2.65,
                yaw:-88,
                cssClass: 'moveScene',
                scene: 'insideEight'
            },

            nextScene2:{
                type: 'custom',
                pitch: 9.64,
                yaw:36.1,
                cssClass: 'moveScene',
                scene: 'insideNine'
            } ,

                        nextScene3:{
                type: 'custom',
                pitch: -6.58,
                yaw:-132,
                cssClass: 'moveScene',
                scene: 'insideOne'
            }  
        }
    },   

                      insideEleven:{
        title:'Cubierta Bote Costado Babor Proa',
        image: insideEleven,
        pitch: 0.41,
        yaw: -141,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: -5.97,
                yaw:-113,
                cssClass: 'moveScene',
                scene: 'insideTwo'
            },  
                        
            nextScene1:{
                type: 'custom',
                pitch: 36.4,
                yaw:-54.2,
                cssClass: 'moveScene',
                scene: 'insideOne'
            }  
        }
    }, 

                          insideTwelve:{
        title:'Cubierta Bote Costado Babor',
        image: insideTwelve,
        pitch:3.95,
        yaw: 156,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: -18.7,
                yaw:159,
                cssClass: 'moveScene',
                scene: 'insideEight'
            },  
                        
            nextScene1:{
                type: 'custom',
                pitch: 19.71,
                yaw: 54.7,
                cssClass: 'moveScene',
                scene: 'insideThree'
            },
            
            nextScene2:{
                type: 'custom',
                pitch: -21,
                yaw: 84.4,
                cssClass: 'moveScene',
                scene: 'insideTen'
            }  
            
        }
    }, 
    
             insideThirteen:{
        title:'Cuarto de Maquinas Costado Babor Popa',
        image: insideThirteen,
        pitch: -1.05,
        yaw: 143,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch:30.50,
                yaw: -61.13,
                cssClass: 'moveScene',
                scene: 'insideEight'
            } ,
            
                        nextScene1:{
                type: 'custom',
                pitch:-3.49,
                yaw: 87.22,
                cssClass: 'moveScene',
                scene: 'insideFourteen'
            }  ,

                        nextScene2:{
                type: 'custom',
                pitch:2.91,
                yaw: -179,
                cssClass: 'moveScene',
                scene: 'insideSixteen'
            }  
        }
    },

                          insideFourteen:{
        title:'Cuarto De Maquinas Costado Babor Proa',
        image: insideFourteen,
        pitch:3.95,
        yaw: 156,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 8.35,
                yaw:-178,
                cssClass: 'moveScene',
                scene: 'insideThirteen'
            },  
                        
            nextScene1:{
                type: 'custom',
                pitch: 25.8,
                yaw: -169,
                cssClass: 'moveScene',
                scene: 'insideEight'
            } ,

            nextScene2:{
                type: 'custom',
                pitch: 31.69,
                yaw: 42.74,
                cssClass: 'moveScene',
                scene: 'insideFifteen'
            } 
            
        }
    }, 

             insideFifteen:{
        title:'Cubierta Superior Cuarto De Maquinas',
        image: insideFifteen,
        pitch:-5.79,
        yaw: 33.6,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: -50.4,
                yaw: 0.50,
                cssClass: 'moveScene',
                scene: 'insideFourteen'
            }  
        }
    },

             insideSixteen:{
        title:'Cuarto De Maquinas Costado Estribor',
        image: insideSixteen,
        pitch:-12.40,
        yaw: 99.35,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 2.25,
                yaw: 133.3,
                cssClass: 'moveScene',
                scene: 'insideThirteen'
            } , 

            nextScene1:{
                type: 'custom',
                pitch: 0.63,
                yaw: 82.40,
                cssClass: 'moveScene',
                scene: 'insideSeventeen'
            }  
            
        }
    },

                 insideSeventeen:{
        title:'Servo Motor Crujia',
        image: insideSeventeen,
        pitch:-12.40,
        yaw: 99.35,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 2.25,
                yaw: 133.3,
                cssClass: 'moveScene',
                scene: 'insideEighteen'
            } , 

                nextScene1:{
                type: 'custom',
                pitch: 4.35,
                yaw: 47.89,
                cssClass: 'moveScene',
                scene: 'insideNineteen'
    
            }  
        }
    },

                 insideEighteen:{
        title:'Servo Motor Costado Babor',
        image: insideEighteen,
        pitch:0.58,
        yaw: 143.9,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 2.25,
                yaw: 133.3,
                cssClass: 'moveScene',
                scene: 'insideSeventeen'
            }  ,

                nextScene1:{
                type: 'custom',
                pitch:-0.0831,
                yaw: -161.18,
                cssClass: 'moveScene',
                scene: 'insideNineteen'
            }  
            
        }
    },

                 insideNineteen:{
        title:'Servo Motor Costado Estribor',
        image: insideNineteen,
        pitch:1.72,
        yaw: -145,
        hotSpots:{
            
            nextScene:{
                type: 'custom',
                pitch: 4.53,
                yaw: 175.8,
                cssClass: 'moveScene',
                scene: 'insideEighteen'
            } , 

            nextScene1:{
                type: 'custom',
                pitch: -3.43,
                yaw: -101,
                cssClass: 'moveScene',
                scene: 'insideSeventeen'
            }  
            
        }
    },
    
}
export default Scene;









