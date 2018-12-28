<template>
<!-- 
  6. v-container: 그리드리스트의 가장 큰 부분을 담당하는 태그로 v-layout과 v-flex로 다양한 화면구성을 만들 수 있다.
  grid-list-xl 옵션으로 extra-large에 어울리는 간격으로 그리드리스트를 만든다.
 -->
 <!-- <v-container fluid grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="red">
        a
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="blue">
        b
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="red">
        c
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="blue">
        d
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="red">
        e
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="blue">
        f
      </v-card>
    </v-flex>
  </v-layout>
</v-container> -->
  <v-container grid-list-xl fill-height>
    <!-- 7. v-layout: row옵션을 통해 컴포넌트를 왼쪽에서 오른쪽으로 정렬한다. -->
    <v-layout row wrap>
      <v-flex xs12 lg8>            
              <!-- 8. v-flex:를 놓아 3개의 공간을 만든다. 
                xs12(extra small에서는 12의 사이즈)
                sm4 (small에서는 4의 사이즈)
                -->
                
                  <!-- 
                    9.vuetify의 그리드는 가로로 총 12개의 칸을 사용한다.
                    v-card는 정보를 표현하는 자리를 만들며 내부에 v-card-title, v-card-text 등으로 칸을 나눌 수 있다.
                  -->
                  <!-- 
                    10. 카드 개수를 동적으로 표현하기위해서 v-for문을 사용한다.                    
                    반복을 위해서는 반복되는 컴포넌트에 유니크한 key를 붙여줘야 한다. 
                    따라서 :key = index(문법주의)를 통해 index 값을 각 컴포넌트에 입력한다.          
                    -->
                  <v-card 
                  sm4      
                  v-for="(restaurant, index) in restaurants"        
                  :key="index">
                  
                    <v-card-text>
                      <div>{{ restaurant.name }}</div>
                      <div>{{ restaurant.type }}</div>
                      <div>개수: {{ restaurant.count }}</div>
                    </v-card-text>
                    <!-- 13. v-divider: 구획을 나눠주는 컴포넌트, v-card-text, v-card-actions사이에 가로줄을 쳐서 공간을 나눔 -->
                    <v-divider/>          
                    <v-card-actions>
                      <!-- 14. v-spacer: 여백을 만드는 컴포넌트. 가로길이 전체를 차지하므로 다른 컴포넌트를 밀어줄 때 사용 -->
                      <!-- 
                      <v-spacer/>
                        12. v-icon: 아이콘을 표시하는 컴포넌트, class="px-2"는 아이콘에 내부패딩 2를 부여함(px단위가 아님)
                        p-2(전체패딩), px-2(가로패딩), py-2(세로패딩), pt pb pr pl(top, bottom, right, left), m-2(margin 2)
                      -->
                      <v-icon small class="px-2">favorite</v-icon><span>0</span>                        
                    </v-card-actions>
                  </v-card>                                                       
            
      </v-flex>

      <v-flex dflex xs12 sm4>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="red lighten-2" tile flat>
              hello
              
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      restaurants: [
        {
          name: '당근',
          type: '야채',
          count: '5'
        },
        {
          name: '소고기(100g)',
          type: '육류',
          count: '4'
        },
        {
          name: '고등어(마리)',
          type: '생선',
          count: '2'
        },
        {
          name: '양파',
          type: '야채',
          count: '10'
        }
      ]
    }
  }
}
</script>
