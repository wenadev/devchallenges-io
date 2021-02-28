const INPUT_DATA = [
    {
      id: 1,
      title: 'Label',
      desc: [
        {
          id: 1,
          fullDesc: '<Input />',
          text:'Label',
          inputError:false,         
          isDisabled: false,
          inputSize:'md'
        },
        {
            id: 2,
            fullDesc: '&:hover',
            btnColor:null,
            text:'Label',
            inputError:false,           
            isDisabled: false,
            inputSize:'md'
          },
          {
            id: 3,
            fullDesc: '&:focus',
            btnColor:null,
            text: 'Label',
            inputError:false,            
            isDisabled: false,
            inputSize:'md'
          }
      ]
    },
    {
        id: 2,
        title: 'Label',
        desc: [
            {
                id: 4,
                fullDesc: '<Input error/>',
                text:'Label',
                inputError:true,               
                isDisabled: false,
                inputSize:'md'
              },
              {
                  id: 5,
                  fullDesc: '&:hover',
                  btnColor:null,
                  text:'Label',
                  inputError:true,                  
                  isDisabled: false,
                  inputSize:'md'
                },
                {
                  id: 6,
                  fullDesc: '&:focus',
                  btnColor:null,
                  text: 'Label',
                  inputError:true,                 
                  isDisabled: false,
                  inputSize:'md'
                }
          ]
      },
      {
        id: 3,
        title: 'Label',
        desc: [
            {
                id: 7,
                fullDesc: '<Input disabled />',
                btnColor:null,
                text: 'Label',
                inputError:false,
                isDisabled: true,
                inputSize:'md'
            }
        ]
      },
      {
        id: 4,
        title: 'Label',
        desc: [
            {
                id: 8,
                fullDesc: '<Input helperText="Some interesting text" />',
                btnColor:'primary',
                text: 'Label',
               inputError:false,
                disableShadow:true,
                isDisabled: false,
                inputSize:'md'
            },
            {
                id: 9,
                fullDesc: '<Input helperText="Some interesting text" error />',
                btnColor:'primary',
                text: 'Label',
               inputError:true,
                disableShadow:true,
                isDisabled: false,
                inputSize:'md'
            }
        ]
      },
      {
        id: 5,
        title: 'Label',
        desc: [
            {
                id: 10,
                fullDesc: '<Input startIcon />',
                btnColor:null,
                text:'Label',
               inputError:false,               
                isDisabled: false,
                inputSize:'md',
                positionIcon: 'startIcon'
            },
            {
                id: 11,
                fullDesc: '<Input endIcon />',
                btnColor:null,
                text:'Label',
                inputError:false,
                disableShadow:false,
                isDisabled: false,
                inputSize:'md',
                positionIcon: 'endIcon'
            }
        ]
      },
      {
        id: 6,
        title: 'Label',
        desc: [
            {
                id: 12,
                fullDesc: '<Input value="text" />',
                btnColor:'primary',
                text: 'Label',
               inputError:false,              
                isDisabled: false,
                inputSize:'md',

            }
        ]
      },
      {
        id: 7,
        title: 'Label',
        desc: [
            {
                id: 13,
                fullDesc: '<Input size="sm" />',
                btnColor:'primary',
                text: 'Label',
               inputError:false,                
              isDisabled: false,
                inputSize:'sm'
            },
            {
                id: 14,
                fullDesc: '<Input size="md" />',
                btnColor:'primary',
                text: 'Label',
               inputError:false,               
                isDisabled: false,
                inputSize:'md'
            }
        ]
      },
      {
        id: 8,
        title: 'Label',
        desc: [
            {
                id: 15,
                fullDesc: '<Input fullWidth />',
                btnColor:'default',
                text: 'Label',
               inputError:false,               
                isDisabled: false,
                inputSize:'fl'
            }
        ]
      },
      {
        id: 9,
        title: 'Label',
        desc: [
            {
                id: 18,
                fullDesc: '<Input multiline row="4" />',
                btnColor:'default',
                text: 'Label',
               inputError:false,               
                isDisabled: false,
                inputSize:'multi'
            }
        ]
      }
  ];
  
  export default INPUT_DATA;
  