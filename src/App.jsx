import React, { useEffect, useRef } from 'react' // Import React and useEffect hook


function App() {

  const screenRef = useRef(null);
  const bgRef = useRef(null); // Adicione uma referência para o fundo
  const scoreRef = useRef(null); // Adicione uma referência para o fundo

  useEffect(() => {
    const phaserScript = document.createElement('script');
    phaserScript.src = './js/basket/phaser.min.js';
    phaserScript.type = 'text/javascript';
    phaserScript.async = true;
    phaserScript.onload = () => {
      const baskScript = document.createElement('script');
      baskScript.src = './js/basket/bask.js';
      baskScript.type = 'text/javascript';
      baskScript.async = true;
      document.body.appendChild(baskScript);
    };

    document.body.appendChild(phaserScript);

    return () => {
      document.body.removeChild(phaserScript);
      const baskScript = document.querySelector(`script[src='./js/bask.js']`);
      if (baskScript) {
        document.body.removeChild(baskScript);
      }
    };
  }, []);

  const handlePlayClick = () => {
    if (screenRef.current) {
      screenRef.current.classList.add('hidden');
    }
  };

  const handleReplayClick = () => {
    const gameOverElement = document.getElementById('game-over');
    const screenElement = document.getElementById('screen');

    if (gameOverElement) {
      gameOverElement.classList.add('hidden'); // Oculta o game-over
      console.log("Replay clicado: Tela de game-over oculta."); // Log para replay
    }
    if (screenElement) {
      screenElement.classList.remove('hidden'); // Exibe o screen
      console.log("Tela do jogo exibida."); // Log para tela do jogo
    }
  };
  return (
    <div className=''>
      <div className=' font-check'>
        <div id='screen' ref={screenRef} className='absolute z-20 flex flex-col items-center justify-center w-full h-screen gap-2 text-xl font-semibold uppercase'>
          <div className='absolute w-full h-screen bg-[url("/images/assets/images/bg2.jpg")] bg-cover bg-top '></div>
          <div className="relative z-40 flex flex-col items-center justify-between h-screen py-16">


            <div id='gap-hoop' className='flex flex-col items-center'>

              <div className='flex flex-col items-center gap-1 mt-2'>
                <div className='flex font-check flex-col items-center text-white leading-[0.9] uppercase text-[84px] '>
                  <p>space</p>
                  <p>ball</p>
                </div>

                <div className='flex gap-6 mt-2 font-Semi'>
                  <div className='flex items-center gap-2 font-semi'>
                    <p className='text-[26px] bg-gradient-to-l from-[#56FF53] to-[#BFFF00] bg-clip-text text-transparent'>
                      100
                    </p>
                    <img className='w-[18px]' src="./images/assets/images/bolt.svg" alt="" />
                  </div>

                  <div className='flex items-center gap-[10px] font-semi'>
                    <p className='text-[26px] bg-gradient-to-l from-[#FFF600] to-[#FFAE00] bg-clip-text text-transparent'>
                      100
                    </p>
                    <img className='w-[23px]' src="./images/assets/images/coin.svg" alt="" />
                  </div>
                </div>
              </div>


              <div id='hoop' className='relative flex justify-center w-full'>
                <div className='absolute backdrop-blur-sm h-[208px] rounded-3xl w-[315px] top-1 -z-10 bg-gray-500/20'></div>
                <img className='w-[315px]' src="/images/assets/images/hoop2.png" alt="" />
              </div>

            </div>

            <div id='tap' className='relative mb-4 flex items-center justify-center  w-[18.2rem] rounded-full h-[4.25rem]'>

              <div className='rounded-full w-[18.2rem] h-[4.25rem] absolute bottom-[4px]'>
                <img src="/images/assets/images/shape.png" alt="" />
              </div>

              <div onClick={handlePlayClick} id='play' className='font-Semi h-full gap-[10px] mb-[4px] py-3 justify-center w-full relative z-10 flex  items-center text-[#121212] text-[21px] rounded-full'>

                <p className='font-Semi mt-[2px]'>Tap to play</p>

                <div className='p-[3px] relative rounded-full w-[79px] h-[36px] flex items-center justify-center font-clash text-[1.2rem]'>

                  <div className='rounded-full top-0 w-[83px] h-[36px] absolute'>
                    <img className='' src="/images/assets/images/minishape.png" alt="" />
                  </div>

                  <div className='relative z-10 text-[#121212] rounded-full gap-[3px] text-[18px] w-full h-full justify-center flex items-center gap-'>

                    <p className='mt-[1.5px]'>- 11</p>

                    <img className=' w-[12px]' src="/images/assets/images/thunder.svg" alt="" />

                  </div>

                </div>

              </div>
            </div>


          </div>

          {/* <img className='z-30 h-[24rem] -bottom-10 hidden' src="/images/assets/images/black.png" alt="" /> */}

        </div>

        <div id='score-container' className='absolute text-[#68FF61] font-checkRegular uppercase flex gap-4 justify-center w-full text-2xl hidde'>

          <div className='flex gap-2'>
            <p>lives:</p>
            <p id='lifes' ></p>
          </div>
          <p>//score</p>
          <p className='w-4 text-white font-check' id='score' >0</p>

        </div>

        <div id='game-over' className='absolute z-20 z-40 flex items-center hidden w-full h-screen text-white cursor-default bg-black/10 backdrop-blur-lg'>
          <div className="flex flex-col items-center justify-center w-full -mt-34"> {/* Flexbox for centering content */}

            <div className='flex flex-col items-center gap-3 uppercase pb-7 w-80 text-8xl font-Semi'> {/* Section for displaying score */}
              <h1 className='text-[29px] '>score</h1> {/* Display the word "tokens" */}
              <div className='flex items-end gap-2'>
                <p className='bg-gradient-to-l from-[#FFF600] to-[#FFAE00] bg-clip-text text-transparent' id='score-game'></p> {/* Display current score */}
                <img className='w-[39px] mb-4' src="/images/assets/images/coin.svg" alt="" /> {/* Coin image */}
              </div>

              <div className='w-[238px] h-[2px] bg-[#9298C0]/20'></div>

            </div>

            <div className='flex flex-col items-center gap-4 pb-6 uppercase w-80 text-8xl font-Semi' > {/* Section for displaying best score */}
              <img className='w-[67px]' src="./images/assets/images/trophy.svg" alt="" /> {/* Display an image */}
              <h1 className='text-[29px] '>BEST</h1> {/* Display the word "BEST" */}
              <p className='bg-gradient-to-l from-[#56FF53] to-[#BFFF00] bg-clip-text text-white'>
                100
              </p> {/* Display best score */}
            </div>

            <div className='w-[238px] h-[2px] bg-[#9298C0]/20'></div>


            <div className='relative z-50 p-[0.1rem] bg-gradient-to-r from-[#7CCA8F] to-[#357F40] rounded-full mt-8'> {/* Container for replay button */}

              <div onClick={handleReplayClick} id='replay' className='cursor-pointer  flex gap-2 items-center text-[#121212] px-8 py-3 text-2xl bg-gradient-to-l from-[#057600] to-[#68FF61] rounded-full'>


                <div className='flex items-center gap-[5px] font-checkR text-[20px]'>
                  <img className='' src="/images/assets/images/rotate.svg" alt="" />
                  <p className='text-[#262000]'>Replay</p> {/* Text for replay button */}
                </div>

                <div className='relative z-10 text-[#121212] rounded-full gap-[3px] w-[89px] h-[42px] justify-center flex items-center mt-[2px]'>

                  <div className='absolute bottom-0 rounded-full -z-10'>
                    <img className='w-32' src="/images/assets/images/minishape.png" alt="" />
                  </div>


                  <p className='font-Semi text-[20px]'>00</p>

                  <img className=' w-[13.55px]' src="/images/assets/images/bolts.svg" alt="" />

                </div>

              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default App
