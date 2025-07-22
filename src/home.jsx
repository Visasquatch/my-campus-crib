import React from "react";
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div align="center">
      <section className="openText">
        <div className="open1">Your Campus, Your Comfort</div>
        <div className="open2">
          Helping University of Ilorin students find the best campus housing with ease.
        </div>
      </section>
      <br /> 
      <div className="cards">
        <div className="card">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO2WwSsEURzHf+JCOVCSjTjsOijlioucnRxYV4e1LiRZZVOO/oHl7uJAodwUN7nJwVmhlbQS4sJ89ETGanZ21sy8GeZTr6Z5vfe+3973vfcTibAGWAAWJYwAB3xxImEBSACP/OQZ6JYgA6QBA2tU37yEIDJ2BCdSQAy4wzlPQJdu8SmbyNhhALO6xO/jHkd+Cm8GbnCfB6DDa/HjwCveYQAzXonfwj8O3RTe5FFk7FCRav+t+GHgBX0YwFSl4jcIDntOhNcAywSPNaDOTnybOkAEl2MgbiV+CCgQfO6BZHFkljy+372KVK0ysEl42VEGBpxelfmLAqmRHL3xOSZGc1xd3r7/74lNV9wqQCVm8DNGWScjlXjz4unkig4DWfM5qAK2TZ3npUb2JTLfFu/vzPhh4NT0rSrh6uJbqAE4A3aBxlIzqdho2IF6YB24BlqsrtJWtRsf3yXPgBKtdmJybNWXMyCmt6rcF7nUZK43O8oSHRmQkBjQgUQG/pKBvIZSQtw0oKOUEDcN6CglxE0DOkoJcdOAzlKibP70QyaRAYlKCVsIGOIUAob8OwMRERESCt4AdqjuhLVnBvwAAAAASUVORK5CYII="
            alt="hostel"
            style={{ width: "15%", height: "auto", paddingRight: "0" }}
          />
          <div style={{ display: "flex", flexDirection: "column", width: "auto", paddingLeft: "5%" }}>
            <header>On-Campus Private Hostels</header>
        <p>Connecting Unilorin students to safe, affordable, and privately-owned hostels near campus.</p>
        </div>
        </div>
        <div className="card">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1UlEQVR4nO2Z3UtTYRzH110X/QV1Fb1YWJSIYW+aF6HQRVCMuo1gdtcYbSaiTqWUjGLEsiDbEJzhbLUiKRsVhRk6WiuHgqLYhaS7CXN1nmcv33gOKdLZ3Dlnq2cHzhe+cNjO+T2fz3nOLrYZDHr06NGj+QAoAtAFYAjAywLpEIDbjE2uxB4AMRRuYgCK5Yh4UPjplSMSRuEnLEdkHIWf8ZxFpibm8exhEC5nAI6rT+G48gT3HEN45BnBp7EZJOLJrBTsnNDoDHy9I+K1bAab5XIGMOgLimv8E5HFb99xrcmHmjI79m++uG6P7rqMugtujIfmJKt/Cc3BVuvGkaK6rHNqyuzobPaJa+dF5G0ggvJt1qwL/92SLWbcbPOvzrnR6hdfUzrn4HaryJCzCLuDShdf6aEdttU57FjtHFutO3cRq8mlGoDdzZWwY7VzrCaXLqJK5MDWS6jYXY+qvQ04Ud6K01UdSKUg9tSxdhwvaRLfZ1XyebHmW+TwThtMRic6Gnxwd73GC38Y4bGvWJj/AUqguNGFGCY+z+PV8wj63e9xq30Q5nPdqC5tzr9Ii6UPnU2P8fHDLISfSVXAajo7FUXPnTc4W309d5FEAogtJ/4bPM3Q6clF8fFULMIuilO+8DRN2Y2VLZJMYpo3MF1PJi6KRLLtxkZKQHjD0iyNxxFdV4QKsPKGpDJKBKQIwb5Mu7GBEszwhqRyK6Av/W5QlHKHI4p25ReATekeKwtvOKqwgoCT6US6eYNRpbtC0CYRIQQB3mBUeb1SEQGjGtyRgPTRIojwBqNKKyCYTiTGHYwo7rJEpNHsSVnO34eW2mj2pCQilcX1KbXf4Hi1srheKtLfM7z0wPUOWmp/z/CSRIT9fAXtZVEX0bIIBeAFcJdTvX8YchaxGzgHQEs+RM5woV8TxpAPEaOBcwAYlYgMZPgTsoIL/ZowhgxsA2vP06NHjx6DZvIb12Qe0z9wg5gAAAAASUVORK5CYII="
            alt="bed"
            style={{ width: "15%", height: "auto", paddingRight: "0" }}
          />
          <div style={{ display: "flex", flexDirection: "column", width: "auto", paddingLeft: "5%" }}>
            <header>Multiple Room Options</header>
            <p>Choose from a variety of room options, from shared rooms to private suites.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADFElEQVR4nO3bz4tNYQDG8YtZMkpJGLJhIf+A5A9QSP4LxqDsTVlIKWFFZCFFNrOYZjBi4Q8YTMlIkR8bFlNjDA2ur968E03z494795znPfd9PjU13e7c97znOXPO+8yZU6uZmZmZmZmVANgK9AH3gXHga/waj68dA7aot7PjAJuBq8AvllYH7gLb1NvdEYBDwBTN+wIcVG9/pQEn4hHdqjpwXD2PKh/5y9n5s8Jn+DehGUBPi6edxU5Hm9TzqgzgBu13TT2vKi01G1ntNCt8Zo96fskLF02K09vktuTXO4B7BQYw1OA25Ns7gNcFBjDewPh59442r37mmlpibPeOggOYXGRc944AeEVxXi4wpnuH8iKMe8c/cWlXlCPzjOfe8b+wri5oh/ycb4ek1DuSAVwvYGdcSbV3JCcWoXAha5dJYGOKvSNZwL42nYrqwIEUe0fy4vl5ucWoL8XeURmh1LR4OpoE9qfYOyoHWA9ciiuZRo76mwud8+f5bF+EGxUbay8wHI6uePqYit8PAUebXXuX3TtM3DtM3DtM3DtM3DsqCegC9gKngQHgBTAB/IhfE/G1gfie8N6uFHtHpQA7gMvA5xZ2xqf4s9tT6h2VEG5wA3faeIfqdvizcwq9I2nACuAU8I32mwZOhjGUvSNZQHecaNEGgTXq+SYF2AA8pTyjYUz1vJMArI07pGxjwLpazoBVwCN0RoCVtVwBZ9DrV/UOKWBXnIzaDLBT1TtkxKeeuZ4oe0fpgD10vulme0dp4hGSi8Gkekdcdn4nL6PJ9A7gMHkaS6J3xJVCrkbkvQN4TN761QF8IG8zs71DFUCR/4lWFQ+UAbSj7HSC3aoA7K9bDkAr3PXrdgBa5T9NKZ5wai46AK2HDkDrnQPQKv8JGvGEU1N3AGIOQMwBiDkAMQcg5gDEHICYAxBzAGIOQMwBiDkAMQcg5gDEHICYAxBzAGIOQMwBZBjAb/Wkc78n/FE964S8VwRwQT3rhJxXPaT3XD3zBDyTPT0ZBgbOAW8ze16gDrwBzgKrJTvfzMzMzMxqVfUHS/EJjs1NzBoAAAAASUVORK5CYII="
            alt="people"
            style={{ width: "15%", height: "auto", paddingRight: "0" }}
          />
          <div style={{ display: "flex", flexDirection: "column", width: "auto", paddingLeft: "5%" }}>
            <header>For Unilorin Students</header>
           <p>Built by students, for students. Verified hostel listings, secure bookings, and no stress.</p>
           </div>
        </div>
      </div> <br/>
    <section>
        <h2 className="text-2xl font-semibold mb-4">Find The Right Hostel For You</h2>
      <button onClick={() => navigate('/university-of-ilorin')} className="bg-[#301a6f] text-white px-6 py-3 rounded hover:bg-[#27125e] transition">
          Explore All Listings
      </button>
      </section>
      <Outlet />
    </div>
  );
}
export default Home;