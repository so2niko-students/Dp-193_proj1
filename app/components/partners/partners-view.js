import './partners-styles.scss';

export class PartnersView {
  main = document.querySelector('.main');

  render = () => {
    this.main.innerHTML = `
        <section>
        	<h2 class="text-center pt-5">Our Partners</h2>
	        <div class="mx-auto">
                <div class="row d-flex align-items-center pt-2 mt-4">
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto">
                                <img src="http://pngimg.com/uploads/acura/acura_PNG131.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                   <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/alfa_romeo/alfa_romeo_PNG71.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/aston_martin/aston_martin_PNG48.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/chevrolet/%D1%81hevrolet_PNG161.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/bentley/bentley_PNG44.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/cadillac/cadillac_PNG66.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                     <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/chrysler/chrysler_PNG51.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/harley_davidson/harley_davidson_PNG70.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/lotus/lotus_PNG32.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/ferrari/ferrari_PNG10665.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/lamborghini/lamborghini_PNG10706.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-sm-7 col-md-4 col-lg-2">
                        <div>
                            <div class="mb-3 w-75 mx-auto ">
                                <img src="http://pngimg.com/uploads/maserati/maserati_PNG72.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                   </div>
	         	</div>
	        </div>
		</section>
    `;
  };
}
