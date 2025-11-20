export default function Skills(){
  return (
    <div className="about">
      <h2>Skills----</h2>
      <div className="sbox">
        <p style={{fontSize: '30px'}}>Languages:</p>
        <img src="/img/c.png" height="100" width="100" style={{marginRight:20}} alt="c" />
        <img src="/img/python.jpeg" height="100" width="200" style={{marginRight:20}} alt="python" />
        <img src="/img/java.jpeg" height="100" width="200" style={{marginRight:10}} alt="java" />
        <img src="/img/html.png" height="100" width="200" alt="html" />
        <img src="/img/css.png" height="100" width="200" style={{marginRight:10}} alt="css" />
      </div>
      <div className="sbox">
        <p style={{fontSize: '30px'}}>Tools:</p>
        <img src="/img/git1.png" height="100" width="200" style={{paddingLeft:70}} alt="git" />
        <img src="/img/google cloud.png" height="100" width="200" style={{paddingLeft:70}} alt="gcloud" />
        <img src="/img/download.jpeg" height="100" width="200" style={{paddingLeft:70}} alt="other" />
      </div>
    </div>
  )
}