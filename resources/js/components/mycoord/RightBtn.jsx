import React from 'react'

function Rightbtn() {
    return (
<div className="rightContainer">

<details class="btnDesign right" id="btnCaps">
    <summary>
        <span class="material-icons-outlined">
            face
            </span>
            <p class="btnText" id="btnTitleCaps">Caps</p>
    </summary>
    <div class="detailsBottom">
        <form action="/main/home" class="detailsBtn" method="get">
            <button type="submit">
                <span class="material-icons-outlined">
                    shopping_cart
                </span>
                <p class="btnText">買う</p>
                <input type="hidden" name="type" value="caps" />
            </button>

        </form>
        <hr />
        <form action="{{ route('searchmysetsGetCaps') }}" class="detailsBtn2" method="get">
            <button class="searchBtn"  type="submit">
                <input type="hidden" name="type" value="caps" />
                <span class="material-icons-outlined">
                    screen_search_desktop
                </span>
                <p class="btnText">選ぶ</p>
            </button>
        </form>
    </div>
</details>

<details class="btnDesign right" id="btnTops">
    <summary>
        <i class="fas fa-tshirt sideFontAwesome"></i>
        <p class="btnText" id="btnTitleTops">Tops</p>
    </summary>
    <div class="detailsBottom">
        <form action="{{ route('buyDetailsItem') }}" class="detailsBtn" method="post">
            <button type="submit">
                <span class="material-icons-outlined">
                    shopping_cart
                </span>
                <p class="btnText">買う</p>
                <input type="hidden" name="type" value="tops" />
            </button>
        </form>
            <hr />
        <form action="{{ route('searchmysetsGetTops') }}" class="detailsBtn2"  method="get">
            <button class="searchBtn"  type="submit">
                <input type="hidden" name="type" value="tops" />
                <span class="material-icons-outlined">
                    screen_search_desktop
                </span>
                <p class="btnText">選ぶ</p>
            </button>

        </form>
    </div>
    </details>

<details class="btnDesign right"  id="btnPants">
    <summary>
        <span class="material-icons-outlined">
            airline_seat_legroom_extra
            </span>
            <p class="btnText" id="btnTitlePants">Pants</p>
    </summary>
    <div class="detailsBottom">
        <form action="{{ route('buyDetailsItem') }}" class="detailsBtn" method="post">
            <button>
                <span class="material-icons-outlined">
                    shopping_cart
                </span>
                <p class="btnText">買う</p>
                <input type="hidden" name="type" value="pants" />
            </button>
        </form>
            <hr />
        <form action="{{ route('searchmysetsGetPants') }}" class="detailsBtn2" method="get">
            <button class="searchBtn"  type="submit">
                <input type="hidden" name="type" value="pants" />
            <span class="material-icons-outlined">
                screen_search_desktop
            </span>
            <p class="btnText">選ぶ</p>
        </button>
        </form>
    </div>
    </details>

<details class="btnDesign right" id="btnSocks">
    <summary>
        <i class="fas fa-socks sideFontAwesome"></i>
        <p class="btnText" id="btnTitleSocks">Socks</p>
    </summary>
    <div class="detailsBottom">
        <form action="{{ route('buyDetailsItem') }}" class="detailsBtn" method="post">
            <button type="submit">
                <span class="material-icons-outlined">
                    shopping_cart
                </span>
                <p class="btnText">買う</p>
                <input type="hidden" name="type" value="socks" />
            </button>
        </form>
            <hr />
        <form action="{{ route('searchmysetsGetSocks') }}" class="detailsBtn2" method="get">
            <button class="searchBtn"  type="submit">
                <input type="hidden" name="type" value="socks" />
            <span class="material-icons-outlined">
                screen_search_desktop
            </span>
            <p class="btnText">選ぶ</p>
        </button>
        </form>
    </div>
    </details>

<details class="btnDesign right"  id="btnShoes">
    <summary>
        <i class="fas fa-shoe-prints sideFontAwesome"></i>
        <p class="btnText" id="btnTitleShoes">Shoes</p>
    </summary>
    <div class="detailsBottom">
        <form action="{{ route('buyDetailsItem') }}" class="detailsBtn" method="post">
            <button type="submit">
                <span class="material-icons-outlined">
                    shopping_cart
                </span>
                <p class="btnText">買う</p>
                <input type="hidden" name="type" value="shoes" />
            </button>
        </form>
            <hr />
        <form action="{{ route('searchmysetsGetShoes') }}" class="detailsBtn2" method="get">
            <button class="searchBtn"  type="submit">
                <input type="hidden" name="type" value="shoes" />
            <span class="material-icons-outlined">
                screen_search_desktop
            </span>
            <p class="btnText">選ぶ</p>
            </button>
        </form>
    </div>
</details>
</div>
    )
}

export default Rightbtn
