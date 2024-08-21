module.exports = {
  reactStrictMode: true,
  async headers(){
    return [{
        source: '/:path*{/}?',
        headers:[
          {
            key:'defHeader',
            value:'CCITEC PERU'
          }
        ]
      
      }
    ]
  }
}
