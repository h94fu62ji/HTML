<script setup>

</script>

<template>
    <div class="leftarea">
        <h4>Lorem, ipsum dolor.</h4>
        <h2>Article lorme Article lorme</h2>
        <small>Lorem, ipsum dolor.</small>
        <div class="photo1"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus eos officia ipsa aliquam, necessitatibus aperiam sint veritatis repellat architecto fugit magni voluptatum, ut dolorum quas nisi ab tempora earum nulla ex saepe. Quos voluptatum enim perferendis iusto atque magnam libero optio repellat quam! Error id ex dignissimos hic saepe?</p>
        <div class="pt2">
            <div class="photo2"></div>
            <div class="textarea">
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos corrupti at optio enim reiciendis perferendis molestias sapiente obcaecati sint!</small>
            </div>
            
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus quidem molestiae, modi itaque dolore magnam nemo reprehenderit amet error. Hic temporibus, sed cumque repellendus delectus, eligendi aperiam ipsa architecto similique velit, quibusdam voluptates saepe incidunt repudiandae cum facilis. Itaque suscipit eos odit consectetur tempore omnis doloribus sapiente modi pariatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse dignissimos eveniet quidem nihil in consectetur rem fuga dolorem facilis.</p>

    </div>
</template>

<style lang="scss" scoped>
.leftarea{
    margin: 30px 0;
    width: 60%;
    .photo1{
        width: 100%;height: 200px;
        background-color: #C8Cd71;
        margin: 20px 0;
    }
    .pt2{
        display: flex;
        margin: 20px 0;
        .textarea{
            width: 50%;
            small{
                display: block;
                padding: 10px 20px;
            }
        }
        .photo2{
            width: 50%;height: 150px;
            background-color: #adcfa3;

        }
    }
}

p{
    padding: 20px 0;
}
h2{
    padding-top: 20px ;
}

</style>