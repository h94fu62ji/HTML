<script>

</script>

<template>
    <div style="height: 700px;"></div>

    <div class="rightarea">
        <div class="search">
            <h2>Article lorema</h2>
            <input type="text" name="" id="">
            <button>Search</button>
        </div>

        <div class="linkarea">
            <div class="linktext">
                <h2>link lorem</h2>
                <div class="line"></div>
                <p>link lorem</p>
                <p>link lorem</p>
                <p>link lorem</p>
                <p>link lorem</p>
            </div>
            <div class="linktext">
                <h2>link lorem</h2>
                <div class="line"></div>
                <p>link lorem</p>
                <p>link lorem</p>
                <p>link lorem</p>
                <p>link lorem</p>
                <p>link lorem</p>
                <p>link lorem</p>
                <p>link lorem</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.rightarea{
    position: absolute;
    top: 75px;
    right: 0;
    width: 35%;

    .search{
        background-color: #adcfa3;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 10px;

        
        input{
            width: 100%;
            height: 1.5rem;
            margin: 10px 0;
            border: 0;
            border-radius: 4px;
            padding-left: 2px;
            
        }
        button{
            padding: 5px 15px;
            background-color: #C8Cd71;
            color: white;
            border-radius: 4px;
            border: 0;
            box-shadow: 1px 1px 1px black;
            cursor: pointer;
            &:hover{
                scale: 1.02;
            }
            &:active{
                scale:.98;
            }

        }
    }

    .linkarea{
        background-color: #adcfa3;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 10px;
        margin-top: 30px;

        .linktext{
            width: 100%;
            margin: 10px 0;
       
            .line{
                width: 100%;
                height: 1.5px;
                background-color: white;
            }
            p{
                padding: 2.5px;
            }
        }
    }
}

</style>