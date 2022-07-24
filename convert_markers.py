import pandas as pd

df = pd.read_csv("markers.csv")
records = []

for r in df.to_dict(orient='records'):
	r['position'] = {
		'lat': float(r['position'].split(',')[0]),
		'lng': float(r['position'].split(',')[1])
	}
	records.append(r)

for r in records:
	for rrss in ['IG', 'FB', 'TW']:
		if str(r[rrss])[:3] == 'www':
			r[rrss] = r[rrss].replace('www', 'https://www')

df_out = df.from_records(records).fillna("")
with open('src/assets/markers.json', 'w') as outfile:
	outfile.write(df_out.to_json(orient='records'))