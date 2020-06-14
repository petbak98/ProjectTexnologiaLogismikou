import fetch from 'node-fetch';

export function healthCheck() { fetch('http://localhost:9000/control-center/api/health-check',{
	method:'GET',
})
	.then((res) => {
        return res.json();
      })
      .then((json) => {
         console.log(json); 
      });
}