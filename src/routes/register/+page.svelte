<script>
	export let data;
</script>

<div class="flex mb-10">
	<div
		class="hero min-h-[50vh]"
		style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
	>
		<div class="hero-overlay bg-primary bg-opacity-80" />
		<div class="hero-content text-center text-base-100">
			<div class="max-w-2xl">
				<h1 class="mb-5 text-3xl font-bold">Witness our commitment.</h1>
				<p class="mb-5">
					Ratchadaporn Pimrat (Fang) and Sirakorn Lamyai (Tan) would like to cordially invite you to
					our wedding party. Join us for a great meal, in a celebratory atmosphere.
				</p>
				<p class="mb-5">
					รัชดาภรณ์ พิมรัตน์ (ฟาง) และศิระกร ลำใย (แทน)
					มีความยินดีเป็นอย่างยิ่งที่จะเชิญเข้าร่วมงานเลี้ยงฉลองมงคลสมรสของเรา
					มารับประทานอาหารพร้อมร่วมยินดีให้กับพวกเรากันนะคะ-ครับ
				</p>
			</div>
		</div>
	</div>
</div>

<div class="flex justify-center">
	<div class="basis-full max-w-4xl">
		<h1 class="font-display text-2xl tracking-wide my-5">Information / ข้อมูลงาน</h1>
		<ul class="list-disc my-5">
			<li>
				Date: To be decided. We look forward to hearing your schedule, so that we can accomodate
				you.
			</li>
			<li>
				Venue: Will be in Bangkok/Nonthaburi. We will try our best to find venue close to public
				transportation options.
			</li>
			<li>Suggested dress code: earth tone</li>
		</ul>
		<ul class="list-disc my-5">
			<li>
				วันที่: เรายังไม่ได้ตัดสินใจวันที่ และอยากจะได้ยินจากทุกคนถึงวันที่ที่จะสะดวกมางานที่สุด
			</li>
			<li>สถานที่: ในกรุงเทพหรือนนทบุรี เราจะพยายามหาสถานที่ที่เดินทางด้วยขนส่งมวลชนสะดวก</li>
			<li>โทนสีเครื่องแต่งกายที่แนะนำ: เอิร์ธโทน</li>
		</ul>
		<h1 class="font-display text-2xl tracking-wide my-5">Join us in our celebration</h1>
		<p class="mb-3">
			Hi, <span class="font-bold">{data.friendly_name}</span>! / สวัสดีค่ะ-ครับ!
		</p>
		<p class="mb-3">
			As our commitment to accomodate everyone to their best, and be green and save the planet (by
			reducing food and other materials waste), we would like to hear from you. While we may not be
			able to accomodate all requests, we will try our best.
		</p>
		<p class="mb-3">
			เรามีความตั้งใจที่จะหาเวลาที่ทุกคนสะดวกที่สุด
			และรักษ์โลกด้วยการลดปริมาณอาหารและวัสดุสิ้นเปลือง เราอยากจะได้ยินเกี่ยวกับข้อมูลต่างๆ
			สำหรับการมาร่วมงานของเราค่ะ-ครับ, เราอาจจะไม่สามารถจัดทุกอย่างได้ตามรายละเอียดที่ระบุมา
			แต่จะพยายามเต็มที่ค่ะ-ครับ
		</p>
		<div class="alert alert-info my-5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-current shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span
				>Don't be too serious! We just want to hear some tentative information from everyone first.
				We will share with your the information upon confirmation.<br />ไม่ต้องกังวล
				ใส่รายละเอียดคร่าวๆ พอ เราจะแจ้งกำหนดการให้ทุกท่านทีหลังเมื่อได้วัน-เวลา
				และสถานที่ที่แน่นอนแล้ว</span
			>
		</div>
		<div class="card bg-base-200 shadow-xl">
			<div class="card-body">
				<form method="post">
					<div class="form-control mb-10">
						<div style="display: none">
							<input name="screen_name" value={data.screen_name} />
							<input name="invitation_code" value={data.invitation_code} />
						</div>
						<label class="label">
							<span class="label-text"
								>How many will be there (including you)? / จำนวนผู้ร่วมงาน (รวมตัวคุณเอง)</span
							>
						</label>
						<input name="n_guests" placeholder="Type here" class="input input-bordered w-full" />
						<label class="label">
							<span class="label-text"
								>Any dietary restrictions or allergies? / ข้อจำกัดด้านการรับประทานอาหาร</span
							>
						</label>
						<input type="text" placeholder="Type here" class="input input-bordered w-full" />
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
					</div>
					<input type="submit" class="btn btn-primary" value="Submit / ส่ง" />
				</form>
			</div>
		</div>
	</div>
</div>
