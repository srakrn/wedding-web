<script>
	export let data;
</script>

<div class="hero min-h-[50vh] mb-10" style="background-image: url(rs-bg.jpg);">
	<div class="hero-overlay bg-primary bg-opacity-80" />
	<div class="hero-content flex-col text-center text-base-100 w-full">
		<img class="max-w-lg" src="rs-text-white.svg" alt="Ratchadaporn & Sirakorn" />
		<div class="max-w-2xl">
			<h1 class="mb-3 text-3xl">Witness out commitment</h1>
			<h1 class="mb-5 text-xl">Tentatively 10 December 2023</h1>
		</div>
	</div>
</div>
<div class="flex justify-center p-3">
	<div class="basis-full max-w-4xl">
		<p class="mb-3">
			Hi-สวัสดีค่ะ-ครับ, <span class="font-bold">{data.friendly_name}</span>!
		</p>
		<p class="mb-3">
			We--Ratchadaporn Pimrat (Fang) and Sirakorn Lamyai (Tan)--would like to cordially invite you
			to our wedding party. Join us for a great meal, in a celebratory atmosphere.
		</p>
		<p class="mb-3">
			รัชดาภรณ์ พิมรัตน์ (ฟาง) และศิระกร ลำใย (แทน)
			มีความยินดีเป็นอย่างยิ่งที่จะเชิญเข้าร่วมงานปาร์ตี้แต่งงานของเรา
			มารับประทานอาหารพร้อมร่วมยินดีให้กับพวกเรากันนะคะ-ครับ
		</p>
		<h1 class="font-display text-2xl tracking-wide my-5">Information / ข้อมูลงาน</h1>
		<ul class="list-disc my-5 ml-5">
			<li>Date: Tentatively 10 December 2023 Evening</li>
			<li>
				Venue: Will be in Bangkok/Nonthaburi. We will try our best to find venue close to public
				transportation options.
			</li>
			<li>Suggested dress code: earth tone</li>
			<li>Note: this will be a very casual party, without any formal/serious ceremonies.</li>
		</ul>
		<ul class="list-disc my-5 ml-5">
			<li>วันที่: คาดว่า 10 ธันวาคม 2566 ช่วงเย็น</li>
			<li>สถานที่: ในกรุงเทพหรือนนทบุรี เราจะพยายามหาสถานที่ที่เดินทางด้วยขนส่งมวลชนสะดวก</li>
			<li>โทนสีเครื่องแต่งกายที่แนะนำ: เอิร์ธโทน</li>
			<li>หมายเหตุ: ไม่มีงานพิธีจริงจัง เป็นงานปาร์ตี้และรับประทานอาหาร</li>
		</ul>
		<h1 class="font-display text-2xl tracking-wide my-5">Join us in our celebration</h1>
		<p class="mb-3">
			We thrive to accomodate everyone joining to our best effort, and be green to our planet (by
			reducing food and other materials waste). While we may not be able to accomodate all requests,
			we will try our best.
		</p>
		<p class="mb-3">
			เรามีความตั้งใจจะดูแลทุกคนที่มางานของเราให้ดีที่สุด
			พร้อมกับช่วยรักษ์โลกด้วยการลดปริมาณอาหารและวัสดุสิ้นเปลือง
			เราอาจจะไม่สามารถจัดทุกอย่างได้ตามรายละเอียดที่ระบุมา แต่จะพยายามเต็มที่ค่ะ-ครับ
		</p>
		<div class="card bg-base-200 shadow-xl">
			<div class="card-body">
				<form method="post">
					<div class="form-control mb-10">
						<div style="display: none">
							<input name="screen_name" class="input" value={data.screen_name} />
							<input name="invitation_code" class="input" value={data.invitation_code} />
						</div>
						<label class="label">
							<span class="label-text"
								>Number of people you planned to bring (including yourself)? / จำนวนคนที่ตั้งใจจะมา
								(นับรวมตัวเอง)</span
							>
						</label>
						<input name="n_guests" placeholder="Type here" class="input input-bordered w-full" />
						<label class="label">
							<span class="label-text"
								>Any dietary restrictions or allergies? / ข้อจำกัดด้านการรับประทานอาหาร</span
							>
						</label>
						<input type="text" placeholder="Type here" class="input input-bordered w-full" />
						<!--
						<label class="label">
							<span class="label-text"
								>What are your preferred date and time? / ช่วงเวลาที่สะดวก</span
							>
						</label>
						<fieldset>
							<label class="label cursor-pointer justify-start">
								<input type="checkbox" class="checkbox mr-2" />
								<span class="label-text"
									>Afternoon of Saturday 4 or 11 November 2023 / บ่ายวันเสาร์ที่ 4 หรือ 11 พฤศจิกายน
									2565</span
								>
							</label>
							<label class="label cursor-pointer justify-start">
								<input type="checkbox" class="checkbox mr-2" />
								<span class="label-text"
									>Evening-night of Saturday 4 or 11 November 2023 / เย็นหรือค่ำวันเสาร์ที่ 4 หรือ
									11 พฤศจิกายน 2565</span
								>
							</label>
							<label class="label cursor-pointer justify-start">
								<input type="checkbox" class="checkbox mr-2" />
								<span class="label-text"
									>Afternoon of Sunday 5 or 12 November 2023 / บ่ายวันอาทิตย์ที่ 5 หรือ 12 พฤศจิกายน
									2565</span
								>
							</label>
							<label class="label cursor-pointer justify-start">
								<input type="checkbox" class="checkbox mr-2" />
								<span class="label-text"
									>Evening-night of Sunday 5 or 12 November 2023 / เย็นหรือค่ำวันอาทิตย์ที่ 5 หรือ
									12 พฤศจิกายน 2565</span
								>
							</label>
							<label class="label cursor-pointer justify-start">
								<input type="checkbox" class="checkbox mr-2" />
								<span class="label-text"
									>Afternoon of Saturdays in December 2023 / เสาร์กลางวัน ธันวาคม 2565 (ปิดเทอม
									LSEd)</span
								>
							</label>
							<label class="label cursor-pointer justify-start">
								<input type="checkbox" class="checkbox mr-2" />
								<span class="label-text"
									>Evening/night of Saturdays in December 2023 / เสาร์เย็น ธันวาคม 2565 (ปิดเทอม
									LSEd)</span
								>
							</label>
							<label class="label cursor-pointer justify-start">
								<input type="checkbox" class="checkbox mr-2" />
								<span class="label-text"
									>Afternoon of Sundays in December 2023 / อาทิตย์กลางวัน ธันวาคม 2565 (ปิดเทอม
									LSEd)</span
								>
							</label>
							<label class="label cursor-pointer justify-start">
								<input type="checkbox" class="checkbox mr-2" />
								<span class="label-text"
									>Evening/night of Sundays in December 2023 / อาทิตย์เย็น ธันวาคม 2565 (ปิดเทอม
									LSEd)
								</span>
							</label>
						</fieldset>
						-->
					</div>
					<input type="submit" class="btn btn-primary" value="Submit / ส่ง" />
				</form>
			</div>
		</div>
	</div>
</div>
