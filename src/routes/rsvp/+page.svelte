<script>
	import { fly } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let data;
	export let form;
	import { background_image_name } from '../../helpers/background';
</script>

<svelte:head>
	<title>Fang & Tan wedding: You are Invited!</title>
	<meta property="og:image" content="/imgs/og/og-thumb-rsvp.png" />
</svelte:head>

<div
	class="hero min-h-[20vh] mb-3"
	style="background-image: url(/imgs/bg/{background_image_name});"
>
	<div class="hero-overlay bg-zinc-700 bg-opacity-80" />
	<div class="hero-content flex-col text-center text-base-100 w-full my-10">
		<img class="max-w-lg" src="cis/rs-text-white.svg" alt="Ratchadaporn & Sirakorn" />
		<div class="max-w-2xl">
			<h1 class="mb-1 text-2xl">Witness our commitment</h1>
			<h1 class="mb-mb-3 text-2xl">10 December 2023</h1>
		</div>
	</div>
</div>
<div class="flex justify-center p-3">
	<div class="basis-full max-w-4xl">
		<p class="mt-5 mb-3 text-xl">
			Hi-สวัสดีค่ะ-ครับ, <span class="font-bold">{data.friendly_name}</span>!
		</p>
		<p class="mb-3">
			We&mdash;Ratchadaporn Pimrat (Fang) and Sirakorn Lamyai (Tan)&mdash;would like to cordially
			invite you to our wedding party. Join us for a great meal, in a celebratory atmosphere.
		</p>
		<p class="mb-3">
			รัชดาภรณ์ พิมรัตน์ (ฟาง) และศิระกร ลำใย (แทน)
			มีความยินดีเป็นอย่างยิ่งที่จะเชิญเข้าร่วมงานปาร์ตี้แต่งงานของเรา
			มารับประทานอาหารพร้อมร่วมยินดีให้กับพวกเรากันนะคะ-ครับ
		</p>
		<h1 class="font-display text-2xl tracking-wide my-5">Information / ข้อมูลงาน</h1>
		<ul class="list-disc my-5 ml-5">
			<li>
				Date: 10 December 2023, 17:00 onwards, celebratory event starts at 18:30 <a
					href="/rs-wedding-calendar.ics"
					class="link">(+ Add to your calendar)</a
				>
			</li>
			<li>
				Venue: Jitprapassorn Restaurant, Chatuchak, Bangkok <a
					href="https://goo.gl/maps/fB2YG5EbXrXzuVzC8"
					class="link">(Google Maps)</a
				>
			</li>
			<li>Event's theme and suggested dress code: Pastel (casual)</li>
		</ul>
		<ul class="list-disc my-5 ml-5">
			<li>
				วันที่: 10 ธันวาคม 2566 ตั้งแต่ 17:00 โดยช่วงงานฉลองบนเวทีเริ่มต้น 18:30 <a
					href="/rs-wedding-calendar.ics"
					class="link">(+ เพิ่มไปยังปฏิทิน)</a
				>
			</li>
			<li>
				สถานที่: บ้านจิตประภัสสร จตุจักร กรุงเทพฯ <a
					href="https://goo.gl/maps/fB2YG5EbXrXzuVzC8"
					class="link">(Google Maps)</a
				>
			</li>
			<li>ธีมงาน และโทนสีที่แนะนำ: โทนสีพาสเทล (ชุดลำลอง: casual)</li>
		</ul>
		<div class="alert">
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
			<span>
				On being accompanied: we sincerely apologise, however, the premise can occupy limited
				people.
				<br />
				กรณีต้องการมีผู้ติดตาม: เราขออภัยเป็นอย่างยิ่ง แต่สถานที่จัดงานสามารถรองรับจำนวนคนได้จำกัด
			</span>
		</div>
		<h1 class="font-display text-2xl tracking-wide my-5">
			Join us in our celebration / มาร่วมยินดีกับเรา
		</h1>
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

		{#if form?.error}
			<div class="alert alert-warning my-5" in:fly={{ y: 20 }}>
				<span>{form.error}</span>
			</div>
		{/if}

		{#if form?.success}
			<div class="alert alert-success mb-3" in:fly={{ y: 20 }}>
				<span>
					We have received your RSVP! If you need to amend the information, please feel free to
					re-submit, thank you!<br />
					เราได้รับคำตอบของคุณแล้ว! หากต้องการเปลี่ยนแปลงคำตอบ สามารถส่งฟอร์มใหม่ได้ ขอบคุณค่ะ-ครับ
				</span>
			</div>
		{/if}

		<div class="card bg-base-200 shadow-xl mb-10">
			<div class="card-body">
				<form method="post" use:enhance>
					<div class="form-control mb-10">
						<div style="display: none">
							<input name="screen_name" class="input" value={data.screen_name} />
							<input name="invitation_code" class="input" value={data.invitation_code} />
						</div>
						<label class="label">
							<span class="label-text text-lg">Will you be there? / คุณจะเข้าร่วมงานไหม</span>
						</label>
						<fieldset>
							<!--If needed to add maybe, modify to `grid-cols-3`!-->
							<div class="grid grid-cols-2 gap-4">
								<div>
									<label class="label cursor-pointer justify-start">
										<input
											type="radio"
											name="rsvp"
											class="radio mr-2"
											value="y"
											checked={data?.rsvp == 'y'}
											required
										/>
										<span class="label-text"> Yes! I will be there / ใช่ ไว้เจอกัน! </span>
									</label>
								</div>
								<!--
								<div>
									<label class="label cursor-pointer justify-start">
										<input type="radio" name="rsvp" class="radio mr-2" value="m" />
										<span class="label-text"> Maybe / คาดว่า </span>
									</label>
								</div>
								-->
								<div>
									<label class="label cursor-pointer justify-start">
										<input
											type="radio"
											name="rsvp"
											class="radio mr-2"
											value="n"
											checked={data?.rsvp == 'n'}
										/>
										<span class="label-text"> Unfortunately no / ไม่สะดวกร่วมงาน </span>
									</label>
								</div>
							</div>
						</fieldset>
						<!--
						<label class="label">
							<span class="label-text"
								>Number of people you planned to bring (including yourself)? / จำนวนคนที่ตั้งใจจะมา
								(นับรวมตัวเอง)</span
							>
						</label>
						<input
							name="n_guests"
							placeholder="Type here / กรอกตรงนี้"
							class="input input-bordered w-full"
							type="number"
						/>
						-->
						<label class="label">
							<span class="label-text">
								<span class="text-lg"
									>Any dietary restrictions or allergies? / ข้อจำกัดด้านการรับประทานอาหาร<br
									/></span
								>
								<span class="italic"
									>Anything counts&mdash;from no spicy to presonal practices / ได้ทุกอย่าง
									ตั้งแต่ไม่กินเผ็ด ถึงความเชื่อส่วนบุคคล</span
								>
							</span>
						</label>
						<input
							name="restrictions"
							type="text"
							placeholder="Leave empty if you don't have any / ไม่ต้องกรอกหากไม่มีข้อจำกัด"
							class="input input-bordered w-full"
							value={data?.restrictions ? data?.restrictions : ''}
						/>
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
