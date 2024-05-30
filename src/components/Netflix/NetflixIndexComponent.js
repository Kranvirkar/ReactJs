import './NetflixIndexComponent.css';
import NetflixHeaderComponent from './NetflixheaderComponent';
import NetflixMainComponent from './NetflixMainComponent';
import NetflixRegisterComponent from './NetflixRegisterComponent';
import NetflixFooterComponent from './NetflixfooterComponent';

export default function NetflixIndex(){
    return (
        <div className="container-fluid">
         <div className="box">
            <header>
            <NetflixHeaderComponent />
            </header>
            <section className="d-flex justify-content-center align-items-center">
                <main>
                    <NetflixMainComponent/>
                    <NetflixRegisterComponent/>
                </main>
            </section>
            <footer>
                <NetflixFooterComponent/>
            </footer>
         </div>
        </div>
    )
}