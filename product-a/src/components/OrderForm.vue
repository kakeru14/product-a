<template>
  <div class="center">
		<!-- table -->
		<form action="#">
					<h3>お届け先情報</h3>
					<table>
						<tbody>
							<tr>
								<td>お名前</td>
								<td><input type="text"></td>
							</tr>
							<tr>
								<td><div>メールアドレス</div></td>
								<td><input type="text"></td>
							</tr>
							<tr>
								<td><div>郵便番号</div></td>
								<td><input type="text"></td>
                <td><button>住所検索</button></td>
							</tr>
							<tr>
								<td><div>住所</div></td>
								<td><input type="text"></td>
							</tr>
							<tr>
								<td><div>電話番号</div></td>
								<td><input type="text"></td>
							</tr>
							<tr>
								<td><div>配達日時</div></td>
								<td>
                  <div>
                    <label style="color: red" for="inputPeriod">配達日時を入力してください</label>
                  </div>
                  <div>
                    <input type="date" name="name" id="name" />
                  </div>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">10時
                      </label>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">11時
                      </label>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">12時
                      </label><br>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">13時
                      </label>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">14時
                      </label>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">15時
                      </label><br>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">16時
                      </label>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">17時
                      </label>
                      <label>
                        <input type="radio" name="responsibleCompany" checked="checked">18時
                      </label>                        
								</td>
							</tr>
						</tbody>
					</table>

			<h3>お支払い方法</h3>
        <label>
          <input type="radio" name="responsibleCompany">代金引換
        </label>
        <label>
          <input type="radio" name="responsibleCompany">クレジットカード
        </label>
        <div>
          <input type="submit" value="この内容で注文する" class="submit">
        </div>
		</form>
	</div>
</template>

<script>
export default {
  
}
</script>



<style lang="css">
.center{
  display: inline-block;
}
.submit{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>