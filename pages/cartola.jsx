import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cartola() {
  const router = useRouter();

  const [date, setDate] = useState("");

  useEffect(() => {
    let thisMonth = () => {
      let newDate = new Date();
      let day = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      setDate(day + "/" + month + "/" + year);
    };
    thisMonth();
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5 col-10 cartola">
        <div className="row mt-5 border-bottom">
          <div className="row">
          <Link href={"documents"} passHref>
            <p className="close text-end">cerrar</p>
            </Link>
          </div>
          <div className="col-3 mt-5">
            <div className=" text-center data-display">
              <p>Valor Patrimonial</p>
              <p>$1.531.555</p>
            </div>
            <div className=" text-center data-display mt-2">
              <p>Retorno</p>
              <p>UF +14.59%</p>
            </div>
          </div>

          <div className="col-3 mt-5 text-center">
            <div className=" text-center data-display">
              <br></br>
              <br></br>
              <p>Valor UF: $31.757</p>
              <br></br>
              <p className="mb-4">Valor Dólar: $788</p>
              <br></br>
              <br></br>
            </div>
          </div>

          <div className="col-6 mt-5 mb-5">
            <div className="data-display">
              <div className="ms-5">
                <br></br>
                <p>Nombre: Miguel Angel Zuñiga Campos</p>
                <p>Dirección: Avenida del Mar 6100 depto 61, La Serena</p>
                <p>Coreo: miguel.z@gmail.com</p>
                <p>Fecha Emisión: 1 de Mayo de 2022</p>
                <br></br>
              </div>
            </div>
          </div>
          <p>Detalle de la inversión</p>
        </div>
        <div className="row mt-2">
          <p>Inversiones en UF</p>
          <br></br>
          <div className="col-2"></div>
          <div className="col-2">Monto invertido</div>
          <div className="col-2">Equivalente CLP</div>
          <div className="col-2">Ingresos</div>
          <div className="col-2">Equivalente CLP</div>
          <div className="col-1">Retorno</div>
          <div className="col-1">Término Inversión</div>
        </div>

        <div className="row mt-2 data-display-totals">
          <div className="col-2">Total</div>
          <div className="col-2">UF 47.345</div>
          <div className="col-2">$158.196.476</div>
          <div className="col-2">UF 5.332</div>
          <div className="col-2">$ 158.758.404</div>
          <div className="col-1">14.59%</div>
          <div className="col-1"></div>
        </div>

        <div className="row mt-2 data-display">
          <div className="col-2">Fagnano I</div>
          <div className="col-2">11.000</div>
          <div className="col-2">$333.415.170</div>
          <div className="col-2">UF 1.690 </div>
          <div className="col-2">$51.224.694</div>
          <div className="col-1">15.36%</div>
          <div className="col-1">12/25/2023</div>
        </div>

        <div className="row mt-2 data-display">
          <div className="col-2">Fagnano II</div>
          <div className="col-2">4.000</div>
          <div className="col-2">$121.709.320</div>
          <div className="col-2">UF 614</div>
          <div className="col-2">$18.696.699</div>
          <div className="col-1">15.35%</div>
          <div className="col-1">12/25/2023</div>
        </div>

        <div className="row mt-2 data-display">
          <div className="col-2">Volcán Tronador III</div>
          <div className="col-2">5.047</div>
          <div className="col-2">$150.384.954</div>
          <div className="col-2">UF 721</div>
          <div className="col-2">$21.481.277</div>
          <div className="col-1">14.29%</div>
          <div className="col-1">08/21/2023</div>
        </div>

        <div className="row mt-2 data-display">
          <div className="col-2">Grajales</div>
          <div className="col-2">5.110</div>
          <div className="col-2">$148.692.926</div>
          <div className="col-2">UF 559</div>
          <div className="col-2">$16.226.017</div>
          <div className="col-1">10.94%</div>
          <div className="col-1">07/25/2022</div>
        </div>

        <div className="row mt-2 data-display">
          <div className="col-2">Grajales San Joaquón</div>
          <div className="col-2">8.891</div>
          <div className="col-2">$258.727.481</div>
          <div className="col-2">UF 972</div>
          <div className="col-2">$28.283.664</div>
          <div className="col-1">10.93%</div>
          <div className="col-1">08/08/2022</div>
        </div>

        <div className="row mt-2 data-display">
          <div className="col-2">Amengual</div>
          <div className="col-2">2.500</div>
          <div className="col-2">$71.633.775</div>
          <div className="col-2">UF 164</div>
          <div className="col-2">$4.699.176</div>
          <div className="col-1">6.56%</div>
          <div className="col-1">03/30/2022</div>
        </div>

        <div className="row mt-2 data-display bg-light">
          <div className="col-1"></div>
          <div className="col-3">Amengual Prórroga I | 180 dias</div>
          <div className="col-2"></div>
          <div className="col-2">UF 87</div>
          <div className="col-2">$2.554.761</div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <div className="row mt-2 data-display bg-light">
          <div className="col-1"></div>
          <div className="col-3">Amengual Prórroga II | 167 dias</div>
          <div className="col-2"></div>
          <div className="col-2">UF 154</div>
          <div className="col-2">$4.660.706</div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <div className="row mt-2 data-display">
          <div className="col-2">Edificio Augusto D´Halmar</div>
          <div className="col-2">5.029</div>
          <div className="col-2">$147.635.850</div>
          <div className="col-2">UF 371</div>
          <div className="col-2">$10.891.410</div>
          <div className="col-1">7.38%</div>
          <div className="col-1">03/30/2022</div>
        </div>

        <div className="row mt-2 data-display">
          <div className="col-2">FIP Rosas Baquedano</div>
          <div className="col-2">4.000</div>
          <div className="col-2">$126.908.000</div>
          <div className="col-2">UF 0</div>
          <div className="col-2">$0</div>
          <div className="col-1"></div>
          <div className="col-1"></div>
        </div>

        <br></br>
        <br></br>

        <div className="row mt-2">
          <p>Inversiones en USD</p>
          <br></br>
          <div className="col-2"></div>
          <div className="col-2">Monto invertido</div>
          <div className="col-2">Equivalente CLP</div>
          <div className="col-2">Ingresos</div>
          <div className="col-2">Equivalente CLP</div>
          <div className="col-1">Retorno</div>
          <div className="col-1">Término Inversión</div>
        </div>

        <div className="row mt-2 data-display-totals">
          <div className="col-2">Total</div>
          <div className="col-2">USD 0</div>
          <div className="col-2">$ 0</div>
          <div className="col-2">USD 0</div>
          <div className="col-2">$0</div>
          <div className="col-1">0%</div>
          <div className="col-1"></div>
        </div>

        <br></br>
        <br></br>

        <div className="row mt-2">
          <p>Inversiones en Pesos</p>
          <br></br>
          <div className="col-2"></div>
          <div className="col-2">Monto invertido</div>
          <div className="col-2">Equivalente CLP</div>
          <div className="col-2">Ingresos</div>
          <div className="col-2">Equivalente CLP</div>
          <div className="col-1">Retorno</div>
          <div className="col-1">Término Inversión</div>
        </div>

        <div className="row mt-2 data-display-totals">
          <div className="col-2">Total</div>
          <div className="col-2">USD 0</div>
          <div className="col-2">$ 0</div>
          <div className="col-2">USD 0</div>
          <div className="col-2">$0</div>
          <div className="col-1">0%</div>
          <div className="col-1"></div>
        </div>
        <div className="container mt-5">
          <div className="row w-25 mx-auto">
            <Link href={"documents"} passHref>
              <button type="button" className="btn btn-back btn-sm">
                Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
